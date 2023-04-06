import { renderTree } from "../render";



let state = {
    profilePage: {
        dialogsData: [
            {id:1, name:"Maxim"},
            {id:2, name:"Lera"},
            {id:3, name:"Anton"},
            {id:4, name:"Katya"},
            {id:5, name:"Vika"},
        
        ],
        posts: [{id: 1, message:'how are you', likeCount:12},
        {id: 2, message:'How are you', likeCount:32},
    ]
    },
    messagePage:{
        MessageData: [{id:1,message:"hi"},
    {id:2,message:"How Are You"},
    {id:3,message:"Hello"}],
    }
    
    

}



export let add_post = (postMessage:string) =>{
    let new_post ={
        id: Math.floor(10+Math.random()*100),
        message: postMessage,
        likeCount: Math.floor((Math.random()*100))

    };
    state.profilePage.posts.push(new_post);
    renderTree(state);
}


export default state;