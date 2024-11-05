import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline_logo from '../../assets/underline.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_logo from '../../assets/menu-open.png';
import menu_c_logo from '../../assets/menu-close.png';

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // Track menu open/close state
  const menuRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle between open and close
    menuRef.current.style.right = menuOpen ? "-350px" : "0";
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className="logo" />
      
      <ul ref={menuRef} className="nav-menu">
      {!menuOpen ? (
        <img onClick={toggleMenu} src={menu_logo} alt="Open Menu" className='menu-open' />
      ) : (
        <img onClick={toggleMenu} src={menu_c_logo} alt="Close Menu" className='menu-close' />
      )}
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setmenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline_logo} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setmenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline_logo} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => setmenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline_logo} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => setmenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline_logo} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setmenu("contact")}>Contact Me</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline_logo} alt="Underline" />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
