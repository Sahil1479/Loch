import React from "react";
import bellIcon from "../../images/Bell-White.svg";
import WalletAlertCard from "./WalletAlertCard";
import NotificationCard from "./NotificationCard";
import WalletActiveAlertCard from "./WalletActiveAlertCard";
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
        {/* <div className="notification-carousel">
            <NotificationCard />
            <WalletAlertCard />
            <WalletActiveAlertCard />
        </div> */}
        <NotificationCarousel />
    </div>
  );
};
