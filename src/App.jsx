import logo from './logo.svg';
import style from './App.module.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'

import { Route, Routes } from 'react-router-dom';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer, { withRouter } from './components/Profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initialize } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component{

  componentDidMount() {
    this.props.initialize()
  }

  
  render (){

    if(!this.props.initialized){
      return <Preloader />
    }
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
}

const mapStateToProps = (state) =>({
    initialized: state.app.initialized
})


export default compose(
   withRouter,
  connect(mapStateToProps,{initialize})
  )
    (App);
