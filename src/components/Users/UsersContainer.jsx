import { follow, setUsers, unfollow ,setCurrentPage, setTotalUsersCount,  toogleIsFetching,toogleFollowingInProgress,getUsersThunk} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import { connect } from "react-redux";
import preloader from './../../img/preloader.svg'
import style from './Users.module.css'
import Preloader from './../common/Preloader/Preloader'
import { UserAPI, getUsers } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersAPI extends React.Component {

    

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage,this.props.pageSize);
       
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toogleIsFetching(true);

        UserAPI.getUsers(this.props.currentPage,this.props.pageSize).then(response => {
                this.props.toogleIsFetching(false);
                this.props.setUsers(response.items)
            })
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
        toogleFollowingInProgress = {this.props.toogleFollowingInProgress}
        
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
        isFetching : state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}





const UsersContainer = withAuthRedirect(connect(mapStateToProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toogleIsFetching,
    toogleFollowingInProgress,
    getUsersThunk,
    
}
)(UsersAPI))


export default UsersContainer;