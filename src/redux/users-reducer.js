import { rerenderTree } from "..";
import image from './../img/unknown-avatar.jpeg'


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS ='SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';


let initState = {
    users : [],
    pageSize:5,
    totalUsersCount: 16,
    currentPage:1,
    isFetching: true

      

};

const usersReducer = (state= initState ,action) => {

    switch (action.type){
        case FOLLOW:
            debugger
            return {
            ...state,
            users: state.users.map(u => {
                if(u.id===action.userid){
                    return {...u,followed:true}
                }
                return u;
            }),

        }
        case UNFOLLOW:
            return { 
            ...state,
            users: state.users.map(u => {
                if(u.id===action.userid){
                    debugger
                    return {...u,followed:false}
                }
                return u;
            }),

        }
        case SET_USERS: {
            return {...state,users:[...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state,currentPage:action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOOGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }



        
            

        default :
            return state
    }
    

    
}


export const follow = (userid) => ({type:FOLLOW, userid:userid})
export const unfollow = (userid) => ({type: UNFOLLOW,userid:userid})
export const setUsers = (users) => ({type:SET_USERS,users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage:currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching})
export default usersReducer