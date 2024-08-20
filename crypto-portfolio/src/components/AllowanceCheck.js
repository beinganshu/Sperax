import React, { useState } from 'react';
import './AllowanceCheck.css';
const AllowanceCheck = ({ walletAddress }) => {
  const [allowances, setAllowances] = useState([]);

  const checkAllowance = async () => {
    // Fetch allowances based on walletAddress
  };

  return (
    <div>
      <h2>Allowance Check</h2>
      <button onClick={checkAllowance}>Check Allowance</button>
      <table>
        <thead>
          <tr>
            <th>Contract</th>
            <th>Allowance</th>
          </tr>
        </thead>
        <tbody>
          {allowances.map((allowance, index) => (
            <tr key={index}>
              <td>{allowance.contract}</td>
              <td>{allowance.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllowanceCheck;
