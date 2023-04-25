import { acceptFollow,follow,unfollow, acceptUnfollow ,setCurrentPage,toogleFollowingInProgress,getUsers} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import { connect } from "react-redux";
import preloader from './../../img/preloader.svg'
import style from './Users.module.css'
import Preloader from './../common/Preloader/Preloader'
import { AuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";


class UsersAPI extends React.Component {

  
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
     
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
       
    }

    
    render(){
         
        return  <>
        {this.props.isFetching ? <Preloader />: null}
        
        <Users totalUsersCount = {this.props.totalUsersCount}
        pageSize = {this.props.pageSize} currentPage = {this.props.currentPage}
        onPageChanged = {this.onPageChanged}
        users = {this.props.users}
        follow ={this.props.follow}
        unfollow = {this.props.unfollow}
        
        
        followingInProgress = {this.props.followingInProgress} /> 
        </>
    }

    

}



let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        
        followingInProgress: state.usersPage.followingInProgress

    }
}

let Redirect = AuthRedirect(UsersAPI)

const UsersContainer = connect(mapStateToProps,{
    follow,
    unfollow,
    acceptFollow,
    acceptUnfollow,
    
    setCurrentPage,
    
    
    toogleFollowingInProgress,
    getUsers,
    
}
)(Redirect)



export default 
compose(
    AuthRedirect,
    connect(mapStateToProps,{
        follow,
        unfollow,
        acceptFollow,
        acceptUnfollow,
        
        setCurrentPage,
        
        
        toogleFollowingInProgress,
        getUsers,
        
    }
    )
)(UsersContainer);