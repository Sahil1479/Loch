import React from 'react';
import './WalletAlertCard.css';
import barIcon from '../../images/bar-chart-2.svg';

const WalletAlertCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="icon-placeholder">
          <img src={barIcon} alt="Bar Chart" className="bar-icon" />
        </div>
        <input type="checkbox" defaultChecked />
      </div>
      <div className="card-body">
        <p>Notify me when any wallets move more than</p>
        <select className="dropdown">
          <option>$1,000.00</option>
          <option>$5,000.00</option>
          <option>$10,000.00</option>
        </select>
      </div>
    </div>
  );
};

export default WalletAlertCard;
