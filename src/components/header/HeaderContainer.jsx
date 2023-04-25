
import React from 'react';

import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/auth-reducer';
import { authAPI } from '../../api/api';
class HeaderContainer extends React.Component {

  componentDidMount(){
    // this.props.toogleIsFetching(true);
        this.props.getAuthUserData()
  }

  render () {
    return <Header {...this.props}/>
    

    
  }
}

let mapStateToProps = (state) =>({
  isAuth:state.auth.isAuth,
  login:state.auth.login,


})

export default connect(mapStateToProps,{getAuthUserData})(HeaderContainer)