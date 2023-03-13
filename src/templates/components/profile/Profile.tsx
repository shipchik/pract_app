import background_image from './../../../static/img/content_background.webp';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.main}>
        <div className={style.bg_image}>
        <img src={background_image} alt="bg" />
        </div>

        <div>
          ava-info
        </div>

        <MyPosts />

      </div>
    );
}


export default Profile