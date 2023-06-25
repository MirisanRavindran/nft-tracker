import "../App.css";

import { Tokens } from "../Components/Tokens";
import { Header } from "../Components/Header";
import { useEffect, useState } from "react";

function TokenList() {
  const [tokenAddress, setTokenAddress] = useState("");
  const queryParameters = new URLSearchParams(window.location.search);
  const handleSubmit = (owner: string) => {
    setTokenAddress(owner);
  };

  useEffect(() => {
    const address = queryParameters.get("q")
    address && setTokenAddress(address); 
  },[window.location])

  return (
    <>
      <div style={{ marginTop: tokenAddress ? 0 : -100 }}>
        <Header onSubmit={handleSubmit} disabled={false} />
      </div>
      {tokenAddress && (
        <main>
          <div className="lists-wrapper">
            <Tokens tokenAddress={tokenAddress} />
          </div>
        </main>
      )}
    </>
  );
}

export default TokenList;