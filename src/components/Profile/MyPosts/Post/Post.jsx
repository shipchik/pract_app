import style from './Post.module.css';
import avatar from './../../../../img/unknown-avatar.jpeg';



const Post =(props) =>{
    
    return (
        
        <div className={style.item}>
            <img className={style.item_image} src={avatar} alt="avatar" />
            <div className={style.post_description}>{props.message}</div>
            <div>
                <span>{props.likeCount}</span>
            </div>
        </div>
    );
}


export default Post;