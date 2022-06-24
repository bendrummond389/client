import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import { MockTokenABI } from "../abis/MockToken";
import { LotteryABI } from "../abis/Lottery";
import { TOKEN_ADDRESS, LOTTERY_ADDRESS } from "../constants/TokenAddress";


// MetaMask API calls

export const getMetaMaskProvider = async () => {
  const ethereum = await detectEthereumProvider();
  if (ethereum) {
    return ethereum;
  } else {
    return null;
  }
};

export const connectToMetaMask = async (ethereum) => {
  return await ethereum.request({ method: "eth_requestAccounts" });
};


// Ethers API calls

export const getWeb3Provider = (ethereum) => {
  if (ethereum) {
    return new ethers.providers.Web3Provider(ethereum);
  } else {
    return null;
  }
};

export const isMetaMaskConnected = async (ethereum) => {
  return await ethereum.isConnected();
};

export const addMetaMaskListeners = (
  provider,
  chainChangedCallback,
  accountsChangedCallback
) => {
  provider.on("chainChanged", (chainId) => {
    chainChangedCallback(chainId);
  });
  provider.on("accountsChanged", (accounts) => {
    accountsChangedCallback(accounts);
  });
};

export const getAccountSigner = async (provider) => {
  if (provider) {
    return await provider.getSigner();
  } else {
    return null;
  }
};

export const weiToEth = (weiBalance) => {
  return ethers.utils.formatEther(weiBalance);
};

export const ethToWei = (ethBalance) => {
  return ethers.utils.parseEther(ethBalance);
};

export const formatUnits = (weiBalance, decimals) => {
  return ethers.utils.formatUnits(weiBalance, decimals);
};

export const getLotteryContract = (signer) => {
  return new ethers.Contract(LOTTERY_ADDRESS, LotteryABI.abi, signer);
}

export const getTokenContract = (signer) => {
  return new ethers.Contract(TOKEN_ADDRESS, MockTokenABI.abi, signer);
}

