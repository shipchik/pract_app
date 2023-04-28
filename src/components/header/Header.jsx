
import header_logo from './../../img/header.png';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    return(
        
      <header className={style.header}>
        <img className={style.header_logo} src={header_logo} alt="logo" />
        <div className={style.loginBlock}>
          {props.isAuth ? <div> {props.login} - <button onClick={props.logout}>Log Out</button> </div>:
          <NavLink to={'/login'}>
              login
          </NavLink>

          
        }
          

        </div>
      </header>

    );
}

export default Header