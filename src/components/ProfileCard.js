import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="card profile-card">
      <div className="profile-header">Zero</div>
      <div className="profile-image"></div>
      <div className="profile-name">Danny Hazelwood</div>
      <div className="profile-title">Founder — Zeropay</div>
    </div>
  );
};

export default ProfileCard;
