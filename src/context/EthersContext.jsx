import React,{ createContext, useContext, useState } from 'react'
import { ethers } from 'ethers'


const EthersContext = createContext()

export function useEthers() {
  return useContext(EthersContext)
}

export default function EthersProvider({children}) {

  const value = {

  }


  return (
    <EthersContext.Provider value={vlaue}>
      {children}
    </EthersContext.Provider>
  )
}
