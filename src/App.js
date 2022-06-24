import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BalanceDisplay from "./components/BalanceDisplay";
import EnterLotteryForm from "./components/EnterLotteryForm";
import FunctionTestButton from "./components/FunctionTestButton";
import MetaMaskConnectButton from "./components/MetaMaskConnectButton";
import MintButton from "./components/MintButton";
import EthersProvider from "./context/EthersContext";


function App() {
  return (
    <EthersProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={
            // <FunctionTestButton />
            <EnterLotteryForm />
          } />
          <Route path="/faucet" element={
            <MintButton />
          } />
          <Route path="/test" element={
            <FunctionTestButton />
          } />
          
        </Routes>
      </Router>
    </EthersProvider>
  );
}

export default App;
