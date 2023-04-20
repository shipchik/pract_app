import { rerenderTree } from "..";



const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initState = {
    profilePage: {
        posts: [
          { id: 1, message: "how are you", likeCount: 12 },
          { id: 2, message: "How are you", likeCount: 32 },
        ],

      },
      profile:null,
      

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
        
        default :
            return state
    }
    

    
}


export const addPostActionCreator = (text) => ({type:'ADD-POST',text:text})
export const updateNewPostTextActionCreator = (text) => 
({type: 'UPDATE-NEW-POST-TEXT',newText:text})
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE,profile})

export default profileReducer