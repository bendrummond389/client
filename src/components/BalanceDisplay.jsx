import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { getBalance } from "../apis/blockchain";
import { useEthers } from "../context/EthersContext";

export default function BalanceDisplay() {
  const { provider, signer } = useEthers();
  const balance = 0;

  const handleClick = async () => {

  };

  return (
    <div>
      <Button onClick={handleClick} variant="contained" color="success">
        {balance}
      </Button>
    </div>
  );
}
