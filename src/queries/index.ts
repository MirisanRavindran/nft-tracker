export const query = `query GetNftFloorPrice($tokenAddress: Address) {
  CollectionStats(
    input: {filter: {tokenAddress: {_eq: $tokenAddress}}, blockchain: ethereum, timeFrame: DAILY, order: {firstTransactionBlockTimestamp: DESC}, limit: 20}
  ) {
    CollectionStat {
      dappName
      lowestSalePriceInNativeToken
      lowestSalePriceInUSDC
      tokenAddress
      firstTransactionBlockTimestamp
      id
      token {
        tokenNfts {
          tokenId
          contentValue {
            image {
              small
            }
          }
        }
        id
      }
    }
    pageInfo {
      nextCursor
      prevCursor
    }
  }
}`;