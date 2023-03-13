import style from './Post.module.css';
import avatar from './../../../../../static/img/unknown-avatar.jpeg';


const Post =() =>{
    return (
    
        <div className={style.item}>
            <img className={style.item_image} src={avatar} alt="avatar" />
            post
            <div>
                <span>like</span>
            </div>
        </div>
    );
}


export default Post;