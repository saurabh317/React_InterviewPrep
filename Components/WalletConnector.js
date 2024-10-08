import { useState } from "react";
import Web3 from "web3";

const WalletConnector = () => {
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState(null);

  const connectToMetaMask = async () => {
    if(window.ethereum) {
      console.log(await window.ethereum.enable());
      const allAccounts = await window.ethereum.request({method: "eth_requestAccounts"});
      setAccount(allAccounts[0]);
      const balanceOfAcc = await window.ethereum.request({
        method: "eth_getBalance",
        params: [allAccounts[0]]
      });
      setBalance(Web3.utils.fromWei(balanceOfAcc, "ether"));
    }
  }


  return(
    <div>
      <div>
        <span>Account Address</span>&nbsp;
        <span>{account}</span><br></br>
        <span>Account Balance</span>&nbsp;
        <span>{balance}</span><br></br>
        <button style={{cursor: "pointer"}} onClick={connectToMetaMask}>Connect</button>
      </div>
    </div>
  )
}

export default WalletConnector;