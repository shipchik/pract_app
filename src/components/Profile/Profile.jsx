

import Preloader from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  if(!props.profile){
    return <Preloader />
  }
    return (
        <div >
        
        <ProfileInfo profile={props.profile} status={props.status} updateStatus = {props.updateStatus} />
        <MyPostsContainer />

      </div>
    );
}


export default Profile