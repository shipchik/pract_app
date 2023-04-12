import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";
import { connect } from "react-redux";

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userid) => {
            dispatch(followAC(userid))
        },
        unfollow: (userid) => {
            dispatch(unfollowAC(userid))
        },
        setUsers:(users) =>{
            dispatch(setUsersAC(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer;