import React, { useState } from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  
  
  
  let postElement = props.posts.map(
    post => <Post message={post.message} likeCount={post.likeCount} key={post.id}/>
  );


 
  const [message,setMessage] = useState('')
  let add_post = () => {
    let mes = message;
    setMessage("");
    props.addPost(mes);
  } 

  return (
    <div className={style.postsBlock}>
      posts
      <div>
        <div>
          <textarea value={message} onChange={e => setMessage(e.target.value)} />
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