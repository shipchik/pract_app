import React from "react"
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { getUserProfile,updateStatus,getStatus } from "../../redux/profile-reducer";
import { useParams, useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
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
            userId =28858;
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        
        return (
            <div >
        
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus = {this.props.updateStatus} />

      </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
    

})

export default compose(
    connect(mapStateToProps,{getUserProfile,getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)