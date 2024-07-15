import React from 'react';
import './RevenueCard.css';
import myImage2 from './card 1.jpeg';
const RevenueCard = () => {
  return (
    <div className="card revenue-card">
      <div className="revenue-text">Revenue</div>
      <br></br><br></br>
      <div className="percentage">2.45%</div>
      <br></br><br></br>
      <div className="description">Average Return — Value</div>
      <div className="chart">
        <div className="chart-bar positive"></div>
        
        <div className="chart-bar negative"></div>
    
      </div>
     
    </div>
  );
};

export default RevenueCard;
