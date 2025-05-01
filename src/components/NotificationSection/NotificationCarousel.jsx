import React from 'react';
import Marquee from "react-fast-marquee";
import NotificationCard from './NotificationCard';
import WalletAlertCard from './WalletAlertCard';
import WalletActiveAlertCard from './WalletActiveAlertCard';
import './carousel.css';

const NotificationCarousel = () => {
  return (
    <div className="infinite-carousel-wrapper fade-dynamic">
        <Marquee pauseOnHover={true} speed={40} gradient={false}>
            <div style={{ width: '80%', marginRight: 10 }}><NotificationCard /></div>
            <div style={{ width: '80%', marginRight: 10 }}><WalletAlertCard /></div>
            <div style={{ width: '80%', marginRight: 10 }}><WalletActiveAlertCard /></div>
        </Marquee>
   </div>
  );
};

export default NotificationCarousel;
