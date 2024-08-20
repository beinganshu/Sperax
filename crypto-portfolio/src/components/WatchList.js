import React, { useState, useEffect } from 'react';
import './WatchList.css';
const WatchList = ({ walletAddress }) => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    // Fetch token data based on walletAddress
  }, [walletAddress]);

  return (
    <div>
      <h2>Watch List</h2>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td>{token.name}</td>
              <td>{token.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;
