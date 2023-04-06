import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

interface MyPostsProps{
  posts: {
    id: number;
    message: string;
    likeCount: number;
}[],
add_post:(postMessage: string) => void,
}

const MyPosts = (props:MyPostsProps) => {

  

  let postElement = props.posts.map(
    post => <Post message={post.message} likeCount={post.likeCount} />
  );


  let post_text = React.createRef<HTMLTextAreaElement>();

  let add_post = () => {
    
    props.add_post(post_text.current?.value!);
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
