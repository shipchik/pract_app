import { useState } from "react";
import { renderTree } from "../render";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";



let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "how are you", likeCount: 12 },
        { id: 2, message: "How are you", likeCount: 32 },
      ],
    },
    messagePage: {
      MessageData: [
        { id: 1, message: "hi" },
        { id: 2, message: "How Are You" },
        { id: 3, message: "Hello" },
      ],
      dialogsData: [
        { id: 1, name: "Maxim" },
        { id: 2, name: "Lera" },
        { id: 3, name: "Anton" },
        { id: 4, name: "Katya" },
        { id: 5, name: "Vika" },
      ],
      newMessageBody: "",
    },

    sidebar: {},
  },

  get_state() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._state.messagePage = dialogsReducer(this._state.messagePage, action);
    renderTree();

    // if (action.type === 'ADD-POST') {
    //     let new_post = {
    //         id: Math.floor(10 + Math.random() * 100),
    //         message: action.postMessage,
    //         likeCount: Math.floor((Math.random() * 100))

    //     };
    //     this._state.profilePage.posts.push(new_post);
    //     renderTree(this._state);
    // }

    // else if (action.type === SEND_MESSAGE){

    //     this._state.messagePage.MessageData.push({id: 5, message:action.body});
    //     renderTree(this._state);
    // }
  },
};

export default store;
