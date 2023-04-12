import { rerenderTree } from "..";

let initState = {
    profilePage: {
        posts: [
          { id: 1, message: "how are you", likeCount: 12 },
          { id: 2, message: "How are you", likeCount: 32 },
        ],

      },
      

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
        default :
            return state
    }
    

    
}


export const addPostActionCreator = (text) => ({type:'ADD-POST',text:text})
export const updateNewPostTextActionCreator = (text) => 
({type: 'UPDATE-NEW-POST-TEXT',newText:text})

export default profileReducer