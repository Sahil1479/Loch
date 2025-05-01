import React from 'react';
import './NotificationCard.css';
import bellIcon from '../../images/Bell-Black.svg';

const NotificationCard = () => {
  return (
    <div className="card">
      <div className="card-header">
      <div className="icon-placeholder">
          <img src={bellIcon} alt="Bell Icon" className="bell-icon" />
        </div>
        <button className="save-button">Save</button>
      </div>
      <p className="card-text">
        We’ll be sending<br />notifications to you here
      </p>
      <input
        type="text"
        className="input-box"
        placeholder="hello@gmail.com"
      />
    </div>
  );
};

export default NotificationCard;
