
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


interface PostsData{
  posts: {
    id: number;
    message: string;
    likeCount: number;
}[],
add_post:(postMessage: string) => void,
}

const Profile = (props:PostsData) => {
    return (
        <div >
        
        <ProfileInfo />
        <MyPosts posts= {props.posts} add_post={props.add_post}/>

      </div>
    );
}


export default Profile