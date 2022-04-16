import {useState} from "react";
import { Link, NavLink } from "react-router-dom";

import './header.scss';
import menuIcon from '../../components/img/burger-menu.svg';

function Header() {
   const [menuActive, setMenuActive] = useState(false);
   
   const showMenu = () => {
      setMenuActive(!menuActive);
   }

  return (
        <nav className="navbar">
          <div className="container navbar__container">
             <Link to="/" className="navbar__logo">
               <h1>AinaSha</h1>
               <p>Be light &amp; it'll be easier</p>
             </Link>
             <button onClick={showMenu}className="navbar__toggle">
               <img  src={menuIcon} alt="icon" />
             </button>
             <ul className={menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"}>
                <li className="navbar__menu-item">
                    <NavLink onClick={showMenu} to="/" className="navbar__menu-link">Home</NavLink>
                </li>
                <li className="navbar__menu-item">
                    <NavLink onClick={showMenu} to="/about" className="navbar__menu-link">About</NavLink>
                </li>
                <li className="navbar__menu-item">
                    <NavLink onClick={showMenu} to="/projects" className="navbar__menu-link">Projects</NavLink>
                </li>
                <li className="navbar__menu-item">
                    <NavLink onClick={showMenu} to="/technologies" className="navbar__menu-link">Technologies</NavLink>
                </li>
                <li className="navbar__menu-item">
                    <NavLink onClick={showMenu} to="/skills" className="navbar__menu-link">Skills</NavLink>
                </li>
                <li className="navbar__menu-item">
                    <NavLink onClick={showMenu} to="/contacts" className="navbar__menu-link">Contacts</NavLink>
                </li>   
          </ul>
          </div>
          
        </nav>
    
  )
}

export default Header;



