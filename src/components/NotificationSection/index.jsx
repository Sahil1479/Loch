import React from "react";
import bellIcon from "../../images/Bell-White.svg";
import NotificationCarousel from './NotificationCarousel';

export const NotificationSection = () => {
  return (
    <div className="notification-section">
        <div className="notification-content">
            <img src={bellIcon} alt="Bell icon" className="bell-icon" />
            <h2>Get notified when a highly correlated whale makes a move</h2>
            <p>
                Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.
            </p>
        </div>
        <NotificationCarousel />
    </div>
  );
};
