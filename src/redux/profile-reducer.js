import { rerenderTree } from "..";
import { ProfileAPI, UserAPI } from "../api/api";


const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initState = {
    profilePage: {
        posts: [
          { id: 1, message: "how are you", likeCount: 12 },
          { id: 2, message: "How are you", likeCount: 32 },
        ],

      },
      profile:null,
      status: ""
      

};

const profileReducer = (state= initState ,action) => {
    let stateCopy = {
        ...state,
    }
    switch (action.type){
        
        case 'ADD-POST':
            debugger
            let new_post = {
                id: Math.floor(10 + Math.random() * 100),
                message: action.text,
                likeCount: Math.floor((Math.random() * 100))
    
            };
            stateCopy.profilePage.posts.push(new_post);
            console.log(stateCopy)
            
            return stateCopy;
        case 'UPDATE-NEW-POST-TEXT':
             stateCopy.newPostText = action.newText; 
             return stateCopy;

        case SET_USER_PROFILE:
            return {...state,profile:action.profile}

        case SET_STATUS:
            return {
                ...state,
                status:action.status
            }
        
        default :
            return state
    }
    

    
}


export const addPostActionCreator = (text) => ({type:'ADD-POST',text:text})
export const updateNewPostTextActionCreator = (text) => 
({type: 'UPDATE-NEW-POST-TEXT',newText:text})
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE,profile})
export const setStatus = (status) => ({type:SET_STATUS,status})


export const getStatus =(userId) =>(dispatch) =>{
    ProfileAPI.getStatus(userId)
    .then(response =>{
        
        dispatch(setStatus(response.data))
    })
}
export const updateStatus =(status) =>(dispatch) =>{
    ProfileAPI.updateStatus(status)
    .then(response =>{
        if(response.data.resultCode ===0){
            dispatch(setStatus(status))
        }
        
    })
}

export const getUserProfile = (userId) =>(dispatch) =>{
    UserAPI.getProfile(userId).then(response =>{
        dispatch(setUserProfile(response.data))
    })
}

export default profileReducer