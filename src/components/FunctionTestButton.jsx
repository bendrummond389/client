import React from "react";
import {
  connectToMetaMask,
  getLotteryContract,
  getMetaMaskProvider,
  getWeb3Provider,
  isMetaMaskConnected,
  weiToEth
} from "../apis/blockchain";
import { useEthers } from "../context/EthersContext";
import { Button } from "@mui/material";
import { LOTTERY_ADDRESS } from '../constants/TokenAddress'


export default function FunctionTestButton() {

  const { provider, signer, lotteryContract, tokenContract } = useEthers();


  const handleTest = async () => {
    const addr = await signer.getAddress();
    const allowMantissa = await tokenContract.allowance(addr, LOTTERY_ADDRESS);
    const allow = weiToEth(allowMantissa)
    console.log(allow)
  };

  return (
    <>
      <Button onClick={handleTest} variant="contained" color="success">
        Test
      </Button>
    </>
  );
}
