
import './App.css';
import React from 'react';
import RevenueCard from './components/RevenueCard';
import ProfileCard from './components/ProfileCard';
import BoostCard from './components/BoostCard';
import firstImg from './picture.jpeg'
import myImage2 from './card 1.jpeg'
import myImage3 from './card 3.jpeg'


function App() {
  return (
   <div className='app'>
  <div className="navbar">
        <div className="brand">ZERO</div>
        <div className="menu">
        
        </div>
      </div>
      <div className="cards">
      <RevenueCard/>
    <ProfileCard/>
    <BoostCard/>
       
      </div>
    </div>  
  
  );
}

export default App;
