
import header_logo from './../../static/img/header.png';
const Header = () => {
    return(
        
      <header className='header'>
        <img className="header-logo" src={header_logo} alt="logo" />
      </header>
    );
}

export default Header