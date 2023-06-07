import { gql } from "@apollo/client";


export const TREASURY_UTXO_QUERY = gql`
query GetTreasuryUTxOs($contractAddress: String!) {
  utxos(where: { address: { _eq: $contractAddress } }) {
    txHash
    index
    address
    value
    tokens {
      asset {
        policyId
        assetName
        assetId
      }
      quantity
    }
    datum {
      bytes
      value
    }
  }
}
`;