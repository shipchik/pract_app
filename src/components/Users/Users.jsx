import style from "./Users.module.css";
import image from "./../../img/unknown-avatar.jpeg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { follow, unfollow } from "../../api/api";
import { UserAPI } from "../../api/api";
let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
 
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && style.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  alt="userphoto"
                  src={u.photos.small != null ? u.photos.small : image}
                  className={style.photo}
                />
              </NavLink>
            </div>
            <div>
              
              {u.followed ? (
                
                <button
                  disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                    
                    props.toogleFollowingInProgress(true,u.id)
                    UserAPI.unfollow(u.id).then(data => {
                        if (data.resultCode === 0) {
                            props.unfollow(u.id);
                            props.toogleFollowingInProgress(false,u.id)

                        }
                      });
                    
                  }}>Unfollow</button>
              ) : (
                <button
                disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                  
                    props.toogleFollowingInProgress(true, u.id)
                    
                    UserAPI.follow(u.id).then(data => {
                        if (data.resultCode === 0) {
                            props.follow(u.id);
                            
                            props.toogleFollowingInProgress(false, u.id)

                        }
                      });
                    
                    
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
