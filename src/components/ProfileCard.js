import React from 'react';
import './ProfileCard.css';
import FirstImg from './picture.jpeg';
const ProfileCard = () => {
  return (
    <div className="card profile-card">
      <div className="profile-header">Zero</div>
      <div className="profile-image">
      <img src="./picture.jpeg" alt="Profile" className='card profile-ca' />
      </div>
      <div className="profile-name">Danny Hazelwood</div>
      <div className="profile-title">Founder — Zeropay</div>
    </div>
  );
};

export default ProfileCard;
