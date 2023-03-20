import React from "react";
import style from "./App.module.css";
import Header from "./templates/components/header/Header";
import Navbar from "./templates/components/navbar/Navbar";
import Profile from "./templates/components/profile/Profile";
import Dialogs from "./templates/components/dialogs/Dialogs";
import { BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";





const App = () => {
  return (
    <Router>
      <div className={style.app_wraper}>
        <Header />
        <Navbar />

        <div className={style.content}>
          <Routes>
            <Route path="dialogs" element={<Dialogs />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
          
        </div>
      </div>
    </Router>
  );
};

export default App;
