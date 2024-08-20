import React, { useState } from 'react';
import './App.css';
import WalletConnect from './components/WalletConnect.js';
import WatchList from './components/WatchList.js';
import HistoricalData from './components/HistoricalData.js';
import AllowanceCheck from './components/AllowanceCheck.js';
import TokenTransfer from './components/TokenTransfer.js';

function App() {
  const [walletAddress, setWalletAddress] = useState('');

  return (
    <div className="App">
      <h1>Crypto Portfolio App</h1>
      <WalletConnect setWalletAddress={setWalletAddress} />
      <WatchList walletAddress={walletAddress} />
      <HistoricalData walletAddress={walletAddress} />
      <AllowanceCheck walletAddress={walletAddress} />
      <TokenTransfer walletAddress={walletAddress} />
    </div>
  );
}

export default App;
