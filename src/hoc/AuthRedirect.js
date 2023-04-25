import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";


let mapStateToPropsForRedirect=(state) =>({
    isAuth: state.auth.isAuth
})

export const AuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Navigate to={"/login"} />
        }
    }
    
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}