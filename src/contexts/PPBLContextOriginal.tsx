import React from 'react'

import { useAddress, useWallet } from '@meshsdk/react'
import { createContext, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import { GraphQLUTxO } from '../types/cardanoGraphQL'
import { TREASURY_UTXO_QUERY } from '../data/queries/treasuryQueries'
import { Asset } from '@meshsdk/core'
import { hexToString } from '../utils'
import { ContributorReferenceDatum } from '../types/contributor'
import { getInlineDatumForContributorReference } from '../data/queries/getInlineDatumForContributorReference'

interface CurrentPPBLContext {
  connectedContribToken: string | undefined
  connectedContribTokenUnit: string | undefined
  contributorReferenceDatum: ContributorReferenceDatum | undefined
  connectedIssuerToken: string | undefined
  treasuryUTxO: GraphQLUTxO | undefined
  loading: boolean
  error: boolean
}

const initialContext: CurrentPPBLContext = {
  connectedContribToken: undefined,
  connectedContribTokenUnit: undefined,
  contributorReferenceDatum: undefined,
  connectedIssuerToken: undefined,
  treasuryUTxO: undefined,
  loading: false,
  error: false,
}

const PPBLContext = createContext<CurrentPPBLContext>(initialContext)

type Props = {
  children?: React.ReactNode
  issuerPolicyID: string
  treasury: { address: string }
  contributorPolicyID: string
}

const PPBLContextProvider: React.FC<Props> = ({
  children,
  issuerPolicyID,
  treasury,
  contributorPolicyID,
}) => {
  const address = useAddress()

  const [currentContext, setCurrentContext] = useState<CurrentPPBLContext>(initialContext)
  const [currentTreasuryUTxO, setCurrentTreasuryUTxO] = useState<GraphQLUTxO | undefined>(undefined)

  const [connectedContributorToken, setConnectedContributorToken] = useState<Asset | undefined>(
    undefined,
  )
  const [contribTokenName, setContribTokenName] = useState<string | undefined>(undefined)

  const [connectedReferenceDatum, setConnectedReferenceDatum] = useState<
    ContributorReferenceDatum | undefined
  >(undefined)

  const [connectedCLIAddress, setConnectedCLIAddress] = useState<string | undefined>(undefined)

  const [connectedIssuerToken, setConnectedIssuerToken] = useState<Asset | undefined>(undefined)
  const [issuerTokenName, setIssuerTokenName] = useState<string | undefined>(undefined)

  const { connected, wallet } = useWallet()

  const { data, loading, error } = useQuery(TREASURY_UTXO_QUERY, {
    variables: {
      contractAddress: treasury.address,
    },
  })

  useEffect(() => {
    const newContext: CurrentPPBLContext = {
      connectedContribToken: contribTokenName,
      connectedContribTokenUnit: connectedContributorToken?.unit,
      contributorReferenceDatum: connectedReferenceDatum,
      connectedIssuerToken: issuerTokenName,
      treasuryUTxO: currentTreasuryUTxO,
      loading: loading,
      error: error != undefined,
    }
    setCurrentContext(newContext)
  }, [
    contribTokenName,
    connectedContributorToken,
    connectedReferenceDatum,
    issuerTokenName,
    currentTreasuryUTxO,
    connectedCLIAddress,
    loading,
    error,
  ])

  useEffect(() => {
    if (data && data.utxos.length == 1) {
      setCurrentTreasuryUTxO(data.utxos[0])
    }
  }, [data])

  useEffect(() => {
    const fetchContributorToken = async () => {
      const _token = await wallet.getPolicyIdAssets(contributorPolicyID)
      if (_token.length > 0) {
        setConnectedContributorToken(_token[0])
      }
    }

    const fetchIssuerToken = async () => {
      const _token = await wallet.getPolicyIdAssets(issuerPolicyID)
      if (_token.length > 0) {
        setConnectedIssuerToken(_token[0])
      }
    }

    if (connected) {
      fetchContributorToken()
      fetchIssuerToken()
    }
  }, [connected])

  useEffect(() => {
    const fetchContributorReferenceDatum = async () => {
      if (connectedContributorToken) {
        const _hexName = connectedContributorToken.unit.substring(62)
        const _tokenName = hexToString(_hexName)

        const _datum = await getInlineDatumForContributorReference(_tokenName, contributorPolicyID)
        console.log('Context:', _datum)

        const _formatted_datum: ContributorReferenceDatum = {
          fields: [{ int: _datum.fields[0].int }, { list: _datum.fields[1].list }],
          constructor: 0,
        }

        setConnectedReferenceDatum(_formatted_datum)
        setContribTokenName(_tokenName)
      }
    }

    if (connectedContributorToken) {
      fetchContributorReferenceDatum()
    }
  }, [connectedContributorToken])

  useEffect(() => {
    const fetchIssuerTokenName = async () => {
      if (connectedIssuerToken) {
        const _hexName = connectedIssuerToken.unit.substring(56)
        const _tokenName = hexToString(_hexName)
        setIssuerTokenName(_tokenName)
      }
    }

    if (connectedIssuerToken) {
      fetchIssuerTokenName()
    }
  }, [connectedIssuerToken])

  return <PPBLContext.Provider value={currentContext}>{children}</PPBLContext.Provider>
}

export { PPBLContext, PPBLContextProvider }
