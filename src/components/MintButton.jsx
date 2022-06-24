import React from 'react'
import { connectToMetaMask, ethToWei, getMetaMaskProvider, getWeb3Provider, isMetaMaskConnected } from '../apis/blockchain'
import { useEthers } from '../context/EthersContext'
import Button from '@mui/material/Button';
import { ethers } from 'ethers'


export default function MintButton() {

  const { tokenContract, signer } = useEthers();

  const handleMint = async () => {
    const ammount = ethers.BigNumber.from(100);
    const ammountMantissa = ethToWei(ammount.toString());
    console.log(tokenContract)
    console.log(await signer.getAddress())

    await tokenContract.mint(await signer.getAddress(), ethToWei(ammountMantissa.toString()))

  }





  return (
    <>
    <Button onClick={handleMint} variant="contained" color="success">Mint</Button>
    </>
  )
}
