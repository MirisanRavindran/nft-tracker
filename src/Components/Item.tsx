import { Asset } from "@airstack/airstack-react";

type ItemProps = {
  tokenAddress: string;
  dappName: string;
  lowestSalePriceInNativeToken: string;
  lowestSalePriceInUSDC: string;
  firstTransactionBlockTimestamp: string;
  id: string;
};

function Placeholder() {
  return <img src="/images/placeholder.png" />;
}

export function Item({
  tokenAddress,
  dappName,
  lowestSalePriceInNativeToken,
  lowestSalePriceInUSDC,
  firstTransactionBlockTimestamp,
  id,
}: ItemProps) {
 
  return (
    <tr>
      <td>
        <div className="token-img-wrapper">
          {/*
            STEP 11: Add NftAsset component to render the image
              chain (optional): a string representing the blockchain network to use. Defaults to "ethereum".
              address (required): a string representing the contract address of the NFT.
              tokenId (required): a string representing the token ID of the NFT.
              loading (optional): a React node to show while the asset is loading.
              error (optional): a React node to show if there is an error loading the asset.
              imgProps (optional): an object of HTML image attributes to pass to the underlying image element.
              preset (optional): a string representing the size of the asset image to display. Can be one of "extraSmall", "small", "medium", "large", or "original". Defaults to "medium".
          */}
          <Asset
            address={tokenAddress}
            tokenId={id}
            
            preset="small"
            containerClassName="token-img"
            // error={<Placeholder />}
            loading={<div>Loading...</div>}
        error={<div>Error loading asset.</div>}
          />
        </div>
      </td>
      <td>{tokenAddress || "-"}</td>
      <td>{dappName || "-"}</td>
      <td>{lowestSalePriceInNativeToken || "-"}</td>
      <td>{lowestSalePriceInUSDC || "-"}</td>
      <td>{firstTransactionBlockTimestamp || "-"}</td>
      <td>{id || "-"}</td>
    </tr>
  );
}
