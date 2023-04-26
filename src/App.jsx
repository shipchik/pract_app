import logo from './logo.svg';
import style from './App.module.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'

import { Route, Routes } from 'react-router-dom';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/Login/Login';
const App = () => {
  return (
    
      
    <div className={style.app_wraper}>
      <HeaderContainer />
      <Navbar />

      <div className={style.content}>
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer/>} />
          <Route path="/profile/:userid?" element={<ProfileContainer/> } />
          <Route path="/users" element={<UsersContainer />} />
          <Route path= "/login" element = {<Login />}/>

        </Routes>
       
        
      </div>
    </div>
  
  );
}

export default App;
