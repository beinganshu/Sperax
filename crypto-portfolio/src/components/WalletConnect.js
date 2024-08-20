import React, { useState } from 'react';
import './WalletConnect.css';
import Web3 from 'web3';

const WalletConnect = ({ setWalletAddress }) => {
  const [inputAddress, setInputAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.requestAccounts();
      setWalletAddress(accounts[0]);
    } else {
      alert('Please install MetaMask!');
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect MetaMask</button>
      <input
        type="text"
        value={inputAddress}
        onChange={(e) => setInputAddress(e.target.value)}
        placeholder="Enter wallet address"
      />
      <button onClick={() => setWalletAddress(inputAddress)}>Set Address</button>
    </div>
  );
};

export default WalletConnect;
