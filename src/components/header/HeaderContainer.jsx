
import React from 'react';

import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import { logout } from '../../redux/auth-reducer';
import { authAPI } from '../../api/api';


class HeaderContainer extends React.Component {

 

  render () {
    return <Header {...this.props}/>
    

    
  }
}

let mapStateToProps = (state) =>({
  isAuth:state.auth.isAuth,
  login:state.auth.login,


})

export default connect(mapStateToProps,{setAuthUserData,logout})(HeaderContainer)