import "./App.css";
import TokenList from "./pages/token-list";
/*
  STEP 1: Import init function from airstack-web-sdk
*/
import { init } from "@airstack/airstack-react";

/*
  STEP 2:
  Init the Airstack SDK with the API key. The API key can be found here https://app.airstack.xyz/
  Please note read the API key from environment variable. This is just for demo purpose.
*/
init("00b692317cc24c17b2e1446a6c758237"); // for demo "ef3d1cdeafb642d3a8d6a44664ce566c"

function App() {
  return <TokenList />;
}

export default App;
