import { follow, setUsers, unfollow ,setCurrentPage, setTotalUsersCount,  toogleIsFetching,toogleFollowingInProgress,getUsersThunk} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import { connect } from "react-redux";
import preloader from './../../img/preloader.svg'
import style from './Users.module.css'
import Preloader from './../common/Preloader/Preloader'
import { UserAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize,getUsers, totalUsersCount } from "../../redux/users-selector";

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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount : totalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching : getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}






export default compose(
    connect(mapStateToProps,{
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toogleIsFetching,
        toogleFollowingInProgress,
        getUsersThunk,
        
    }),
    // withAuthRedirect
)(UsersAPI)