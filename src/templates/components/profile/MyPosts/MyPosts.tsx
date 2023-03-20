import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    {id: 1, message:'how are you', likeCount:12},
    {id: 2, message:'How are you', likeCount:32},

  ]

  let postElement = posts.map(
    post => <Post message={post.message} likeCount={post.likeCount} />
  );

  return (
    <div className={style.postsBlock}>
      posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>add post</button>
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
