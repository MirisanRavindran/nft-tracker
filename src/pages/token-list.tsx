import "../App.css";

import { Tokens } from "../Components/Tokens";
import { Header } from "../Components/Header";
import { useState } from "react";

function TokenList() {
  const [tokenAddress, setOwner] = useState("0x23581767a106ae21c074b2276D25e5C3e136a68b");

  const handleSubmit = (owner: string) => {
    setOwner(owner);
  };

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