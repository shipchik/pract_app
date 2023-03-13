import style from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () =>{
    return(
        <div>
          posts
          
          <div>
            <textarea ></textarea>
            <button>add post</button>
            <button>remove post</button>
          </div>
          <div className='posts'>
            <Post />
          </div>
        </div>
    );

}


export default MyPosts