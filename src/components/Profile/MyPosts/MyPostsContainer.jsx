import React from "react";


import MyPosts from "./MyPosts";
import { connect, useDispatch } from "react-redux";
import { updateNewPostTextActionCreator,addPostActionCreator } from "../../../redux/profile-reducer";






const mapStateToProps =(state) =>{
  
  return{
    posts: state.profilePage.profilePage.posts,
    newPostText : state.profilePage.profilePage.newPostText,

  }
}
const mapDispatchToProps =(dispatch) =>{
  return{
    updateNewPostText : (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);

    },
    addPost: (text) => {
      dispatch(addPostActionCreator(text));
    }

  
}
}

const MyPostsContainer =  connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
