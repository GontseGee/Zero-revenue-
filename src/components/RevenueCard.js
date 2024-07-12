import React from 'react';
import './RevenueCard.css';

const RevenueCard = () => {
  return (
    <div className="card revenue-card">
      <div className="revenue-text">Revenue</div>
      <div className="percentage">2.45%</div>
      <div className="description">Average Return — Value</div>
      <div className="chart">
        <div className="chart-bar positive"></div>
        <hr className='dividebar'/>
        <div className="chart-bar negative"></div>
        <hr className='dividebar'/>
      </div>
      <div className="chart-label positive">+ 2.4%</div>
      <div className="chart-label negative">- 3.2%</div>
    </div>
  );
};

export default RevenueCard;
