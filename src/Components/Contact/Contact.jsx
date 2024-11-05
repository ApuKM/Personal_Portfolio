import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_logo from '../../assets/mail.svg'
import location_logo from '../../assets/location1.svg'
import phone_logo from '../../assets/phone.svg'


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7c5cf2e5-b0e2-4b96-9d20-bfb17eb23bdd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert (res.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div id='contact' className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p className='contact-para'>I'm currently available to take on new projects, feel free to send me a message about anything you want.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_logo} alt="" /><p>apukumar180@gmail.com</p>

            </div>
            <div className="contact-detail">
              <img src={phone_logo} alt="" /> <p>+88 01747234764</p>
              
            </div>
            <div className="contact-detail">
              <img src={location_logo} alt="" /><p>Rajshahi, Bangladesh</p>
              
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Name</label>
          <input type="text" name="name" placeholder='Enter your name' />
          <label htmlFor="">Email</label>
          <input type="text" name='email' placeholder='Enter your email' />
          <label htmlFor="">Message</label>
          <textarea name="message" placeholder='Enter your message' rows={8}></textarea>
          <button type='submit' className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact