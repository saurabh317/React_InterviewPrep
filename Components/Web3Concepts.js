import Web3 from "web3";
import ABI from './abis.json'

// https://www.youtube.com/watch?v=oQ5yPKdjxFQ&list=PLbbtODcOYIoFs0PDlTdxpEsZiyDR2q9aA

//This is a dumy component build in order to demonstrate correct syntax and terminology of web3 and web3 js
const Web3Concepts = () => {
  //connecting our web3 obj to blockchain through provider
  const provider = `https://sepolia.optimism.io`;
  const web3 = new Web3(provider);
  web3.eth.getBlockNumber().then((e) => console.log(e))
  web3.eth.getAccounts().then((e) => console.log(e))

  //NOTE :---- in order to communicate with the smartContract through our web3 instance we need contract instance
  //creating an contract instance
  const tokenAddress = `0x0000000000000000000000000000000000000000`;
  const contract = new web3.eth.Contract(ABI.abi, tokenAddress);
  //call() method only used to read data from the smart contracts where as .send() used to modify the data
  contract.methods.balanceOf().call().then((e) => console.log(e))

  const gasPrice = 10;
  const gas = {from: tokenAddress, gas: gasPrice}
  contract.method.balanceOf().send(gas)
  // here send accept an obj with the from and gas keys

  // to listen to smart contract events we can use .getPastEvents() method
  const allEvents = contract.getPastEvents("allEvents", {fromBlock: 0, toBlock: 'latest'})
  console.log(allEvents);

  return (
    <>
      <span>web3 js concepts</span>
    </>
  )
}

export default Web3Concepts;