import { ProjectTxMetadata } from "./project" 

export declare type GraphQLUTxO = {
    txHash: string,
    index: number,
    address: string,
    value: string,
    tokens: GraphQLToken[],
    datum?: GraphQLInlineDatum,
    script?: GraphQLReferenceScript
}

export declare type GraphQLInputUTxO = {
    txHash?: string,
    sourceTxIndex?: number,
    address: string,
    value: string,
    tokens: GraphQLToken[]
}

export declare type GraphQLToken = {
    asset: {
        policyId: string,
        assetName: string
    }
    quantity: string
}

export type GraphQLInlineDatum = {
    bytes: string,
    value: {
        fields: any[],
        constructor: number
    }
}

type GraphQLReferenceScript = {
    type: string,
    hash: string
}

export declare type GraphQLTransactionMetadata = {
    key: string,
    value: any
}

export declare type GraphQLTransaction = {
    inputs: GraphQLInputUTxO[],
    outputs: GraphQLUTxO[],
    metadata: GraphQLTransactionMetadata[]
}

export declare type GraphQLNFTMintingTransaction = {
  hash: string,
  includedAt: string,
  mint: {
    asset: {
      tokenMints: {
        asset: {
          assetName: string
          assetId: string
        }
        quantity: number
      }[]
    }
  }[],
  metadata: GraphQLTransactionMetadata[]
}


export declare type rawTxEscrow = {
    metadata: [{
        "value": ProjectTxMetadata
    }],
    inputs: [{
      "address": string,
      "tokens": [{
        "assetName": string,
        "policyId": string
      }]
    }],
    outputs: [{
      "address": string,
      "tokens": [{
        "asset": {
          "assetName": string,
          "policyId": string
        }
      }]
    }],
  }