import React from 'react'
import './About.css'
import theme_blue from '../../assets/theme_pattern.svg'
import cover_photo from '../../assets/about-me.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                    <img src={theme_blue} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={cover_photo} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>"I am passionate about crafting elegant and user-friendly web experiences that seamlessly blend design with functionality. Frontend development excites me because it allows me to combine my love for coding with creativity. I enjoy turning ideas into interactive interfaces, ensuring they not only look beautiful but also offer an intuitive user experience. I am driven to continuously learn new technologies and techniques to build efficient, high-performance websites that engage users."</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "80%" }} /></div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default About