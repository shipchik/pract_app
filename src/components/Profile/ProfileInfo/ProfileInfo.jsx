import React from "react";
import background_image from './../../../img/content_background.webp';
import style from './ProfileInfo.module.css';




const ProfileInfo = () => {
    return(
        <div >
        <div className={style.bg_image}>
        <img src={background_image} alt="bg" />
        </div>

        <div className={style.profileinfo}>
          ava-info
        </div>
        </div>
    );
}


export default ProfileInfo;