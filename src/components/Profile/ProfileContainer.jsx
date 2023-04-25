import React, { useId } from "react"
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { getUserProfile  } from "../../redux/profile-reducer";
import { useParams, useNavigate } from 'react-router-dom';
import { UsersAPI } from "../../api/api";
import { Navigate } from "react-router-dom";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";

export function withRouter(Children){
    return(props)=>{
        const history = {params: useNavigate()};
       const match  = {params: useParams()};
       return <Children {...props}  match = {match} navigate = {history}/>
   }
 } 
class ProfileContainer extends React.Component {

    componentDidMount() {
        
        let userId = this.props.match.params.userid
        if (!userId){
            userId =2;
        }
        this.props.getUserProfile(userId)
        
    }

    render() {
        
        return (
            <div >
        
        <Profile {...this.props} profile={this.props.profile} />

      </div>
        )
    }
}


let AuthRedirectComponent = AuthRedirect(ProfileContainer)


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    

})





export default compose(
    connect(mapStateToProps,{getUserProfile}),
    withRouter,
    AuthRedirect 

)(ProfileContainer);