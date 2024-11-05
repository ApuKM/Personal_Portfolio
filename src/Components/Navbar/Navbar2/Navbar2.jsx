import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline_logo from '../../assets/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_logo from '../../assets/menu-open.png'
import menu_c_logo from '../../assets/menu-close.png'

const Navbar = () => {

 const [menu, setmenu] = useState("home");
 const menuRef = useRef();

 const openMenu = () => {
   menuRef.current.style.right="0";
 }
 const closenMenu = () => {
  menuRef.current.style.right="-350px";
}


  return (
    <div className='navbar'>
        <img src={logo} alt="" className="logo" />
        <img onClick={openMenu} src={menu_logo} alt="" className='menu-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img onClick={closenMenu} src={menu_c_logo} alt="" className='menu-close' />
            <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setmenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline_logo} />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setmenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline_logo} />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setmenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline_logo} />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setmenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline_logo} />:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setmenu("contact")}>Contact Me</p></AnchorLink>{menu==="contact"?<img src={underline_logo} />:<></>}</li>
        </ul>

        <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me </AnchorLink>
        </div>

    </div>
  )
}

export default Navbar