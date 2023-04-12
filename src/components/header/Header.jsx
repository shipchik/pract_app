
import header_logo from './../../img/header.png';
import style from './Header.module.css';
const Header = () => {
    return(
        
      <header className={style.header}>
        <img className={style.header_logo} src={header_logo} alt="logo" />
      </header>
    );
}

export default Header