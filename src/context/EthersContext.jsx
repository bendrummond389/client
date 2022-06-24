import React, { createContext, useContext, useEffect, useState } from "react";
import {
  connectToMetaMask,
  getAccountSigner,
  getLotteryContract,
  getTokenContract,
  getMetaMaskProvider,
  getWeb3Provider,
  isMetaMaskConnected,
  addMetaMaskListeners,
} from "../apis/blockchain";

import { ethers } from "ethers";

const EthersContext = createContext();

export function useEthers() {
  return useContext(EthersContext);
}

export default function EthersProvider({ children }) {
  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();
  const [tokenContract, setTokenContract] = useState();
  const [lotteryContract, setLotteryContract] = useState();
  const [ticketPrice, setTicketPrice] = useState();
  const [chain, setChain] = useState();
  
  const connectToEthereum = async () => {
    const ethereum = await getMetaMaskProvider();
    const web3Provider = getWeb3Provider(ethereum);
    const accountSigner = await getAccountSigner(web3Provider);
    await connectToMetaMask(ethereum);
    setProvider(web3Provider);
    setSigner(accountSigner);
    setChain(ethereum.chainId)
    setTicketPrice(20);
    addMetaMaskListeners(
      ethereum,
      (chainId) => {setChain(chainId == '0x3')},
      (account) => {console.log(account)}
      )
    
  }




  useEffect(() => {
    connectToEthereum();
    setLotteryContract(getLotteryContract(signer));
    setTokenContract(getTokenContract(signer));
  }, []);

  const value = {
    provider,
    signer,
    lotteryContract,
    tokenContract,
    ticketPrice
  };

  return (
    <EthersContext.Provider value={value}>
      {(chain == '0x3') ? children : 'Please switch to ropsten'}
      </EthersContext.Provider>
  );
}
