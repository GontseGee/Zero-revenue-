import React from 'react';
import './cards.css';

import cardImage from './card 1.jpeg';
import profileImage from './picture.jpeg';
import Card2Image from './card 3.jpeg';
const DashboardCard = () => {
  return (
    <div>
      <header/>
    
    <div className="dashboard-cards">
      {/* Revenue Card */}
      <div className="card revenue-card">
        <div className="revenue-text">Revenue</div>
        <br></br><br></br>
        <div className="percentage">2.45%</div>
        <br></br> <br></br>
        <div className="description">Average Return — Value</div>
       <br></br><br></br><br></br><br></br>
        <div className="chart-image">
          <img src={cardImage} alt="Chart" />
        </div>
      </div>

      {/* Profile Card */}
      <div className="card profile-card">
        <div className="profile-header">Zero</div>
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <br></br>
        <br></br>
        <div className="profile-name">Danny Hazelwood</div>
        <div className='symbol'>~</div>
        <div className="profile-title">Founder — Zeropay</div>
      </div>

      {/* Boost Card */}
      <div className="card boost-card">
        <div className="boost-text">Boost your Earning Today</div>
        <div className="boost-description"> <p>Growth from 2022</p>Today</div>
        <div className="symb">G</div>
        <br></br>
        <br></br>
       <img src={Card2Image} alt="card" />
      </div>
    </div>
    </div>
  );
};


export default DashboardCard;
