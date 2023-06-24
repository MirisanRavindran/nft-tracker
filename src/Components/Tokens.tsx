import InfiniteScroll from "react-infinite-scroll-component";
import { Item } from "./Item";
import { useLazyQueryWithPagination } from "@airstack/airstack-react";
import { query } from "../queries";
import { useCallback, useEffect, useState } from "react";
import { ListTitle } from "./ListTitle";

function Header() {
  return (
    <thead>
      <tr>
        <th>Token Image</th>
        <th style={{ width: 100 }}>lowest Sale Price In Native Token</th>
        <th>lowest Sale Price In USDC</th>
        <th>Token Address</th>
        <th>first Transaction Block Time stamp</th>
        <th style={{ width: 100 }}>Dapp Name</th> 
      </tr>
    </thead>
  );
}

export function Tokens({ tokenAddress }: { tokenAddress: string }) {
  const [fetch, { data, error, loading, pagination }] =
    useLazyQueryWithPagination(query);
  const { hasNextPage, getNextPage } = pagination;

  const [tokens, setTokens] = useState<any[]>([]);

  useEffect(() => {
    if (tokenAddress) {
      fetch({
        tokenAddress,
        limit: 10,
      });
      setTokens([]);
    }
  }, [fetch, tokenAddress]);

  useEffect(() => {
    if (data) {
      const { CollectionStats } = data;
      setTokens((stats) => [...stats, ...CollectionStats.CollectionStat]);
      
    }
  }, [data]);

  const handleNext = useCallback(() => {
    if (hasNextPage) {
      getNextPage();
    }
  }, [getNextPage, hasNextPage]);

  const dataNotFound = !error && !loading && tokens.length === 0;

  // console.log(data,tokens)
  return (
    <div className="tokens">
      <ListTitle title="NFTs" icon="nft" />
      {tokens.length === 0 && loading && (
        <div className="loader">Loading...</div>
      )}
      {dataNotFound && <div> No data found! </div>}
      {tokens.length > 0 && (
        <InfiniteScroll
          next={handleNext}
          dataLength={tokens.length}
          hasMore={pagination.hasNextPage}
          loader={<div className="loader">Loading...</div>}
        >

          <div className="tokens-table-wrapper">
            <table>
              <Header />
               <tbody>
                {tokens.map(
                  ({
                    token,
                    tokenAddress,
                    dappName,
                    lowestSalePriceInNativeToken,
                    firstTransactionBlockTimestamp,
                    lowestSalePriceInUSDC,
                    
                    
                    id,
                  }) => {
                    console.log(token);
                    const tokenId = token.tokenNfts[0].tokenId;
                    return (
                      
                      <Item
                        key={tokenId}
                        tokenAddress={tokenAddress}
                        id={tokenId}
                        dappName={dappName}
                        lowestSalePriceInNativeToken={lowestSalePriceInNativeToken}
                        firstTransactionBlockTimestamp={firstTransactionBlockTimestamp}
                        lowestSalePriceInUSDC={lowestSalePriceInUSDC}
                      />
                    );
                  }
                )}
                </tbody> 
            </table>
          </div>
        </InfiniteScroll>
      )}
      {error && tokens.length === 0 && (
        <div style={{ marginTop: 20 }}> Error while fetching data! </div>
      )}
    </div>
  );
}
