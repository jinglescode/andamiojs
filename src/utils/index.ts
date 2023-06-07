import { Asset, UTxO } from '@meshsdk/core'
import { GraphQLUTxO } from '../types/cardanoGraphQL'
import { ContributorReferenceDatum } from '../types/contributor'

export function stringToHex(str: string) {
  var arr = []
  for (var i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i).toString(16)
  }
  return arr.join('')
}

export function hexToString(input: string) {
  var hex = input.toString()
  var str = ''
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
  }
  return str
}

export function GraphQLToMeshUTxO(utxoFromQuery: GraphQLUTxO, treasury: { address: string }) {
  const lovelace: Asset = {
    unit: 'lovelace',
    quantity: utxoFromQuery.value,
  }

  const assets: Asset[] = [lovelace]

  if (utxoFromQuery.tokens[0]) {
    const gimbals: Asset = {
      unit: utxoFromQuery.tokens[0].asset.policyId + utxoFromQuery.tokens[0].asset.assetName,
      quantity: utxoFromQuery.tokens[0].quantity,
    }
    assets.push(gimbals)
  }

  const _meshUTxO: UTxO = {
    input: {
      outputIndex: utxoFromQuery.index,
      txHash: utxoFromQuery.txHash,
    },
    output: {
      address: treasury.address,
      amount: assets,
      plutusData: utxoFromQuery.datum?.bytes,
    },
  }

  return _meshUTxO
}

export function GraphQLToDatum(utxoFromQuery: GraphQLUTxO) {
  const ProjectList: string[] = []

  if (utxoFromQuery.datum?.value) {
    utxoFromQuery.datum.value.fields[0].list.forEach((project: any) => {
      ProjectList.push(project.bytes)
    })
  }

  return ProjectList
}

export function checkReferenceDatumForPrerequisite(
  refDatum: ContributorReferenceDatum,
  projectHashes: string[],
) {
  if (refDatum.fields[1].list.length > 0) {
    const _validCommitment = refDatum.fields[1].list.filter(
      (completedCommitment: { bytes: string }) => projectHashes.includes(completedCommitment.bytes),
    )
    return _validCommitment.length > 0
  }
  return false
}
