export const MockTokenABI = {
  "_format": "hh-sol-artifact-1",
  "contractName": "MockToken",
  "sourceName": "contracts/Token.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f4d6f636b546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d4f4b0000000000000000000000000000000000000000000000000000000000815250816003908051906020019062000096929190620000b8565b508060049080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000197565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001b057607f821691505b60208210811415620001c757620001c662000168565b5b50919050565b61146980620001dd6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f19146101a357806370a08231146101bf57806395d89b41146101ef578063a457c2d71461020d578063a9059cbb1461023d578063dd62ed3e1461026d576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029d565b6040516100ce9190610cb7565b60405180910390f35b6100f160048036038101906100ec9190610d72565b61032f565b6040516100fe9190610dcd565b60405180910390f35b61010f610352565b60405161011c9190610df7565b60405180910390f35b61013f600480360381019061013a9190610e12565b61035c565b60405161014c9190610dcd565b60405180910390f35b61015d61038b565b60405161016a9190610e81565b60405180910390f35b61018d60048036038101906101889190610d72565b610394565b60405161019a9190610dcd565b60405180910390f35b6101bd60048036038101906101b89190610d72565b6103cb565b005b6101d960048036038101906101d49190610e9c565b6103d9565b6040516101e69190610df7565b60405180910390f35b6101f7610421565b6040516102049190610cb7565b60405180910390f35b61022760048036038101906102229190610d72565b6104b3565b6040516102349190610dcd565b60405180910390f35b61025760048036038101906102529190610d72565b61052a565b6040516102649190610dcd565b60405180910390f35b61028760048036038101906102829190610ec9565b61054d565b6040516102949190610df7565b60405180910390f35b6060600380546102ac90610f38565b80601f01602080910402602001604051908101604052809291908181526020018280546102d890610f38565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b60008061033a6105d4565b90506103478185856105dc565b600191505092915050565b6000600254905090565b6000806103676105d4565b90506103748582856107a7565b61037f858585610833565b60019150509392505050565b60006012905090565b60008061039f6105d4565b90506103c08185856103b1858961054d565b6103bb9190610f99565b6105dc565b600191505092915050565b6103d58282610ab4565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461043090610f38565b80601f016020809104026020016040519081016040528092919081815260200182805461045c90610f38565b80156104a95780601f1061047e576101008083540402835291602001916104a9565b820191906000526020600020905b81548152906001019060200180831161048c57829003601f168201915b5050505050905090565b6000806104be6105d4565b905060006104cc828661054d565b905083811015610511576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050890611061565b60405180910390fd5b61051e82868684036105dc565b60019250505092915050565b6000806105356105d4565b9050610542818585610833565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561064c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610643906110f3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156106bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b390611185565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161079a9190610df7565b60405180910390a3505050565b60006107b3848461054d565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461082d578181101561081f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610816906111f1565b60405180910390fd5b61082c84848484036105dc565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089a90611283565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610913576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090a90611315565b60405180910390fd5b61091e838383610c14565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156109a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099b906113a7565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a379190610f99565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a9b9190610df7565b60405180910390a3610aae848484610c19565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1b90611413565b60405180910390fd5b610b3060008383610c14565b8060026000828254610b429190610f99565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b979190610f99565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610bfc9190610df7565b60405180910390a3610c1060008383610c19565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c58578082015181840152602081019050610c3d565b83811115610c67576000848401525b50505050565b6000601f19601f8301169050919050565b6000610c8982610c1e565b610c938185610c29565b9350610ca3818560208601610c3a565b610cac81610c6d565b840191505092915050565b60006020820190508181036000830152610cd18184610c7e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d0982610cde565b9050919050565b610d1981610cfe565b8114610d2457600080fd5b50565b600081359050610d3681610d10565b92915050565b6000819050919050565b610d4f81610d3c565b8114610d5a57600080fd5b50565b600081359050610d6c81610d46565b92915050565b60008060408385031215610d8957610d88610cd9565b5b6000610d9785828601610d27565b9250506020610da885828601610d5d565b9150509250929050565b60008115159050919050565b610dc781610db2565b82525050565b6000602082019050610de26000830184610dbe565b92915050565b610df181610d3c565b82525050565b6000602082019050610e0c6000830184610de8565b92915050565b600080600060608486031215610e2b57610e2a610cd9565b5b6000610e3986828701610d27565b9350506020610e4a86828701610d27565b9250506040610e5b86828701610d5d565b9150509250925092565b600060ff82169050919050565b610e7b81610e65565b82525050565b6000602082019050610e966000830184610e72565b92915050565b600060208284031215610eb257610eb1610cd9565b5b6000610ec084828501610d27565b91505092915050565b60008060408385031215610ee057610edf610cd9565b5b6000610eee85828601610d27565b9250506020610eff85828601610d27565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f5057607f821691505b60208210811415610f6457610f63610f09565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fa482610d3c565b9150610faf83610d3c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fe457610fe3610f6a565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061104b602583610c29565b915061105682610fef565b604082019050919050565b6000602082019050818103600083015261107a8161103e565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006110dd602483610c29565b91506110e882611081565b604082019050919050565b6000602082019050818103600083015261110c816110d0565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061116f602283610c29565b915061117a82611113565b604082019050919050565b6000602082019050818103600083015261119e81611162565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006111db601d83610c29565b91506111e6826111a5565b602082019050919050565b6000602082019050818103600083015261120a816111ce565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061126d602583610c29565b915061127882611211565b604082019050919050565b6000602082019050818103600083015261129c81611260565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006112ff602383610c29565b915061130a826112a3565b604082019050919050565b6000602082019050818103600083015261132e816112f2565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611391602683610c29565b915061139c82611335565b604082019050919050565b600060208201905081810360008301526113c081611384565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006113fd601f83610c29565b9150611408826113c7565b602082019050919050565b6000602082019050818103600083015261142c816113f0565b905091905056fea26469706673582212202c038d11584c04c6c46ab5ddd8ffec9d5cdd27bd9b80afa6bbcdc27244c8a90c64736f6c63430008080033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f19146101a357806370a08231146101bf57806395d89b41146101ef578063a457c2d71461020d578063a9059cbb1461023d578063dd62ed3e1461026d576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029d565b6040516100ce9190610cb7565b60405180910390f35b6100f160048036038101906100ec9190610d72565b61032f565b6040516100fe9190610dcd565b60405180910390f35b61010f610352565b60405161011c9190610df7565b60405180910390f35b61013f600480360381019061013a9190610e12565b61035c565b60405161014c9190610dcd565b60405180910390f35b61015d61038b565b60405161016a9190610e81565b60405180910390f35b61018d60048036038101906101889190610d72565b610394565b60405161019a9190610dcd565b60405180910390f35b6101bd60048036038101906101b89190610d72565b6103cb565b005b6101d960048036038101906101d49190610e9c565b6103d9565b6040516101e69190610df7565b60405180910390f35b6101f7610421565b6040516102049190610cb7565b60405180910390f35b61022760048036038101906102229190610d72565b6104b3565b6040516102349190610dcd565b60405180910390f35b61025760048036038101906102529190610d72565b61052a565b6040516102649190610dcd565b60405180910390f35b61028760048036038101906102829190610ec9565b61054d565b6040516102949190610df7565b60405180910390f35b6060600380546102ac90610f38565b80601f01602080910402602001604051908101604052809291908181526020018280546102d890610f38565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b60008061033a6105d4565b90506103478185856105dc565b600191505092915050565b6000600254905090565b6000806103676105d4565b90506103748582856107a7565b61037f858585610833565b60019150509392505050565b60006012905090565b60008061039f6105d4565b90506103c08185856103b1858961054d565b6103bb9190610f99565b6105dc565b600191505092915050565b6103d58282610ab4565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461043090610f38565b80601f016020809104026020016040519081016040528092919081815260200182805461045c90610f38565b80156104a95780601f1061047e576101008083540402835291602001916104a9565b820191906000526020600020905b81548152906001019060200180831161048c57829003601f168201915b5050505050905090565b6000806104be6105d4565b905060006104cc828661054d565b905083811015610511576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050890611061565b60405180910390fd5b61051e82868684036105dc565b60019250505092915050565b6000806105356105d4565b9050610542818585610833565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561064c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610643906110f3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156106bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b390611185565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161079a9190610df7565b60405180910390a3505050565b60006107b3848461054d565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461082d578181101561081f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610816906111f1565b60405180910390fd5b61082c84848484036105dc565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089a90611283565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610913576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090a90611315565b60405180910390fd5b61091e838383610c14565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156109a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099b906113a7565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a379190610f99565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a9b9190610df7565b60405180910390a3610aae848484610c19565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1b90611413565b60405180910390fd5b610b3060008383610c14565b8060026000828254610b429190610f99565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b979190610f99565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610bfc9190610df7565b60405180910390a3610c1060008383610c19565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c58578082015181840152602081019050610c3d565b83811115610c67576000848401525b50505050565b6000601f19601f8301169050919050565b6000610c8982610c1e565b610c938185610c29565b9350610ca3818560208601610c3a565b610cac81610c6d565b840191505092915050565b60006020820190508181036000830152610cd18184610c7e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d0982610cde565b9050919050565b610d1981610cfe565b8114610d2457600080fd5b50565b600081359050610d3681610d10565b92915050565b6000819050919050565b610d4f81610d3c565b8114610d5a57600080fd5b50565b600081359050610d6c81610d46565b92915050565b60008060408385031215610d8957610d88610cd9565b5b6000610d9785828601610d27565b9250506020610da885828601610d5d565b9150509250929050565b60008115159050919050565b610dc781610db2565b82525050565b6000602082019050610de26000830184610dbe565b92915050565b610df181610d3c565b82525050565b6000602082019050610e0c6000830184610de8565b92915050565b600080600060608486031215610e2b57610e2a610cd9565b5b6000610e3986828701610d27565b9350506020610e4a86828701610d27565b9250506040610e5b86828701610d5d565b9150509250925092565b600060ff82169050919050565b610e7b81610e65565b82525050565b6000602082019050610e966000830184610e72565b92915050565b600060208284031215610eb257610eb1610cd9565b5b6000610ec084828501610d27565b91505092915050565b60008060408385031215610ee057610edf610cd9565b5b6000610eee85828601610d27565b9250506020610eff85828601610d27565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f5057607f821691505b60208210811415610f6457610f63610f09565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fa482610d3c565b9150610faf83610d3c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fe457610fe3610f6a565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061104b602583610c29565b915061105682610fef565b604082019050919050565b6000602082019050818103600083015261107a8161103e565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006110dd602483610c29565b91506110e882611081565b604082019050919050565b6000602082019050818103600083015261110c816110d0565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061116f602283610c29565b915061117a82611113565b604082019050919050565b6000602082019050818103600083015261119e81611162565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006111db601d83610c29565b91506111e6826111a5565b602082019050919050565b6000602082019050818103600083015261120a816111ce565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061126d602583610c29565b915061127882611211565b604082019050919050565b6000602082019050818103600083015261129c81611260565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006112ff602383610c29565b915061130a826112a3565b604082019050919050565b6000602082019050818103600083015261132e816112f2565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611391602683610c29565b915061139c82611335565b604082019050919050565b600060208201905081810360008301526113c081611384565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006113fd601f83610c29565b9150611408826113c7565b602082019050919050565b6000602082019050818103600083015261142c816113f0565b905091905056fea26469706673582212202c038d11584c04c6c46ab5ddd8ffec9d5cdd27bd9b80afa6bbcdc27244c8a90c64736f6c63430008080033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
