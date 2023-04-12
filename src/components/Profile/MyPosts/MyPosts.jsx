import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

  
  
  let postElement = props.posts.map(
    post => <Post message={post.message} likeCount={post.likeCount} />
  );


  let post_text = React.createRef();

  let add_post = () => {
    
    props.addPost(post_text.current?.value);
  } 

  return (
    <div className={style.postsBlock}>
      posts
      <div>
        <div>
          <textarea ref={post_text} />
        </div>
        <div>
          <button onClick={add_post}>add post</button>
          <button>remove post</button>
        </div>
      </div>
      <div className={style.posts}>
        
        {postElement}
      </div>
    </div>
  );
};

export default MyPosts;