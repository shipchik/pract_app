import { rerenderTree } from "..";
import image from './../img/unknown-avatar.jpeg'


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS ='SET-USERS'


let initState = {
    users : [
        {id:1,PhotoUrl:image,followed: false, fullName: "Dmitry",status: "asdasw", location: {city: 'Minsk', country:"belarus"}},
        {id:2,PhotoUrl:image,followed:true, fullName: "Sasha",status: "asdasw", location: {city: 'new-york', country:"belarus"}},
        {id:3,PhotoUrl:image,followed:true, fullName: "Dasha",status: "asdasw", location: {city: 'moscow', country:"belarus"}},


    ]
      

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
            return {...state,users:[...state.users,...action.users]}
        }



        
            

        default :
            return state
    }
    

    
}


export const followAC = (userid) => ({type:FOLLOW, userid:userid})
export const unfollowAC = (userid) => ({type: UNFOLLOW,userid:userid})
export const setUsersAC = (users) => ({type:SET_USERS,users})

export default usersReducer