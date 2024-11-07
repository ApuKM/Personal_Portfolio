import React from 'react'
import './Hero.css'
import dp from '../../assets/Apu.jpeg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={dp} alt="" />
        <h1>"<span>Apu Kumar</span> - Crafting Modern Frontends from Bangladesh"</h1>
        <div className="hero-action">
            {/* <div className="hero-connect">Connect with me</div> */}
            <div className="hero-resume"> My Resume</div>
        </div>

    </div>
  )
}

export default Hero