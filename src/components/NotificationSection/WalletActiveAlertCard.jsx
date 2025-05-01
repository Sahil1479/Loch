import React from 'react';
import './WalletAlertCard.css';
import clockIcon from '../../images/clock.svg';
import './WalletAlertCard.css';

const WalletActiveAlertCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="icon-placeholder">
          <img src={clockIcon} alt="Clock Icon" className="clock-icon" />
        </div>
        <input type="checkbox" defaultChecked />
      </div>
      <div className="card-body">
        <p>Notify me when any wallet dormant for</p>
        <select className="dropdown">
          <option>&gt; 30 days</option>
          <option>&gt; 90 days</option>
          <option>&gt; 120 days</option>
        </select>
        <p style={{marginBlock: '3px 0px'}}>becomes active</p>
      </div>
    </div>
  );
};

export default WalletActiveAlertCard;
