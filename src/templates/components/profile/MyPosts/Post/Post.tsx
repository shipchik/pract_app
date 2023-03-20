import style from './Post.module.css';
import avatar from './../../../../../static/img/unknown-avatar.jpeg';

interface PostProps{
    message:string;
    likeCount:number;
}

const Post =(props:PostProps) =>{
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