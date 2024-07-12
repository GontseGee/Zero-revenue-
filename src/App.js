
import './App.css';
import React from 'react';
import RevenueCard from './components/RevenueCard';
import ProfileCard from './components/ProfileCard';
import BoostCard from './components/BoostCard';
function App() {
  return (
   <div className='app'>
    <RevenueCard/>
    <ProfileCard/>
    <BoostCard/>
   </div>
  );
}

export default App;
