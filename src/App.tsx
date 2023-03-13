import React from 'react';
import style from './App.module.css';
import Header from './templates/components/header/Header'
import Navbar from './templates/components/navbar/Navbar'
import Profile from './templates/components/profile/Profile';

const App =() =>  {
  return (
    <div className= {style.app_wraper}>
     <Header />
    <Navbar />
    <Profile />
      
    </div>
  );
}


export default App;
