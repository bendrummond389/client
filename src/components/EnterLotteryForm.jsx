import React, { useState } from "react";
import { ethers } from "ethers";
import {
  ethToWei,
} from "../apis/blockchain";
import { LOTTERY_ADDRESS } from "../constants/TokenAddress";
import { useEthers } from "../context/EthersContext";
import {
  Box,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";

export default function EnterLotteryForm() {
  const {
    lotteryContract, 
    tokenContract, 
    ticketPrice 
  } = useEthers();

  const [quantity, setQuantity] = useState("");
  
  const getApproval = async () => {

    // Calculate approval amount and convert to BigNumber
    const approvalAmmount = ethers.BigNumber.from(quantity * ticketPrice);
    
    // Request approval from token smart contract
    const transaction = await tokenContract.approve(
      LOTTERY_ADDRESS,
      ethToWei(approvalAmmount.toString()),
      { gasLimit: 100000 }
    );

    // wait for transaction to mine and return tx on success and null on fail
    try {
      await transaction.wait(1);
      return transaction;
    } catch (err) {
      console.error(err);
      return null;
    }

  };

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };
  
  const handleClick = async () => {
    const transaction = await getApproval();
    if (transaction) {
      await lotteryContract.enterLottery(quantity);
    }
  };

  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  const menuItems = numbers.map((number) => (
    <MenuItem value={number} key={number}>
      {number}
    </MenuItem>
  ));

  return (
    <Box
      sx={{
        margin: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: 300,
      }}
    >
      <FormControl fullWidth color="success" variant="standard">
        <InputLabel id="ticket-quantity-select-label">
          Ticket Quantity
        </InputLabel>
        <Select
          id="ticket-quantity-select"
          labelId="ticket-quantity-select-label"
          label="Quantity"
          value={quantity}
          onChange={handleChange}
        >
          {menuItems}
        </Select>
      </FormControl>
      <Typography variant="h6">{"Total MOK: " + quantity * ticketPrice}</Typography>
      <Button variant="contained" color="success" onClick={handleClick}>
        Enter
      </Button>
    </Box>
  );
}
