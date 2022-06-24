import React from "react";
import { Button } from "@mui/material";
import { useEthers } from "../context/EthersContext";
import { connectToMetaMask } from "../apis/blockchain";

export default function MetaMaskConnectButton() {
  const { connectToMetaMask, setProvider, setSigner, setAddress } = useEthers();

  const handleConnect = async () => {
    const provider = await connectToMetaMask();
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setProvider(provider);
    setSigner(signer);
    setAddress(address);

  };

  return (
    <Button onClick={handleConnect} variant="contained" color="success">
      Connect To MetaMask
    </Button>
  );
}
