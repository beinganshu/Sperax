import React, { useState } from 'react';
import './TokenTransfer.css';
import Web3 from 'web3';

const TokenTransfer = ({ walletAddress }) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      // Implement token transfer logic
    }
  };

  return (
    <div>
      <h2>Token Transfer</h2>
      <input
        type="text"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Recipient Address"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
};

export default TokenTransfer;
