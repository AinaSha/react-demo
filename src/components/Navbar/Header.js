import {useState} from "react";


import './header.scss';
import menuIcon from '../../components/img/burger-menu.svg';

function Header() {
   const [menuActive, setMenuActive] = useState(false);
   
   const showMenu = () => {
      setMenuActive(!menuActive);
   }

  return (
     <header>
        <nav className="navbar">
          <div className="container navbar__container">
             <a href="/" className="navbar__logo">
               <h1>AinaSha</h1>
               <p>Be light &amp; it'll be easier</p>
             </a>
             <button onClick={showMenu}className="navbar__toggle">
               <img  src={menuIcon} alt="icon" />
             </button>
             <ul className={menuActive ? "navbar__menu--show" : "navbar__menu"}>
                <li className="navbar__menu-item">
                    <a href="/" className="navbar__menu-link active">Home</a>
                </li>
                <li className="navbar__menu-item">
                    <a href="/" className="navbar__menu-link">About</a>
                </li>
                <li className="navbar__menu-item">
                    <a href="/" className="navbar__menu-link">Projects</a>
                </li>
                <li className="navbar__menu-item">
                    <a href="/" className="navbar__menu-link">Technologies</a>
                </li>
                <li className="navbar__menu-item">
                    <a href="/" className="navbar__menu-link">Contacts</a>
                </li>
                 
                
                
                 
               
          </ul>
          </div>
        </nav>
     </header>
    
  )
}

export default Header;



