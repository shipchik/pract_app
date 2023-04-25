import React from "react";
import background_image from './../../../img/content_background.webp';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'



const ProfileInfo = (props) => {
    if(!props.profile){
      return < Preloader />
    }
    return(
        <div >
        <div className={style.bg_image}>
        <img src={background_image} alt="bg" />
        </div>

        <div className={style.profileinfo}>
          <img src={props.profile.photos.large} alt="smth" />
          ava-info
        </div>
        </div>
    );
}


export default ProfileInfo;