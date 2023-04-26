import React from "react"
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
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
            userId =2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,{
            withCredentials: true
        }
        ).then(response => {
                this.props.setUserProfile(response.data)
                
                
            })
    }

    render() {
        
        return (
            <div >
        
        <Profile {...this.props} profile={this.props.profile} />

      </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    

})

export default compose(
    connect(mapStateToProps,{setUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)