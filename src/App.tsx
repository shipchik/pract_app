import React from 'react';
import './App.css';
import Header from './templates/components/Header'
import Navbar from './templates/components/Navbar'
import Profile from './templates/components/Profile';

const App =() =>  {
  return (
    <div className= "app-wraper">
     <Header />
    <Navbar />
    <Profile />
      
    </div>
  );
}


export default App;
