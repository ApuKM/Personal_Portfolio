import React from 'react'
import Footer_logo from '../../assets/footer.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-just">
        <img src={Footer_logo} alt="" />
        <p>ALL RIGHTS RESERVED</p>

        </div>
        <hr />
    </div>
  )
}

export default Footer