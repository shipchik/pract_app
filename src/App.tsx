import React from "react";
import style from "./App.module.css";
import Header from "./templates/components/header/Header";
import Navbar from "./templates/components/navbar/Navbar";
import Profile from "./templates/components/profile/Profile";
import Dialogs from "./templates/components/dialogs/Dialogs";
import { BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";

interface AppState{
  app_state: {
    profilePage: {
        dialogsData: {
            id: number;
            name: string;
        }[];
        posts: {
            id: number;
            message: string;
            likeCount: number;
        }[];
    },
    messagePage: {
      MessageData: {
        id: number;
        message: string;
    }[];
},
},
add_post:(postMessage: string) => void,

}




const App = (props:AppState) => {
  return (
    <Router>
      
      <div className={style.app_wraper}>
        <Header />
        <Navbar />

        <div className={style.content}>
          <Routes>
            <Route path="dialogs" element={<Dialogs dialogs = {props.app_state.profilePage.dialogsData} messages = {props.app_state.messagePage.MessageData}/>} />
            <Route path="profile" element={<Profile posts ={props.app_state.profilePage.posts} add_post={props.add_post} />} />
          </Routes>
          
        </div>
      </div>
    </Router>
  );
};

export default App;
