import React from 'react';
import '../style/Home.css';
import PhoneIcon from '../assets/Call-Ringing.svg'


function Home() {
    const menuItems = ["Home", "About", "Loans", "FAQs", "Contact"];
  return (
    <>
      {/* top section for heading */}
      <section className="top-heading">
        <div className="heading-info">Your Partner in Financial Success</div>
      </section>

      {/* section for links heading  */}
      <section className="links-heading">
        {/* site name  */}
        <div className="site-name">
        DPC
        </div>

        {/* navigation links  */}
        <ul className="nav-links">
        {menuItems.map((link, index)=><li key={index}>{link}</li>)}
        </ul>
        

        {/* contacts and logins */}
        <div className="contact-section">
          <div className='phone-logo'>
            <img src={PhoneIcon} alt='phone icon'/>
          </div>
          <button className='button-login'>Login</button>
        </div>
      </section>
    </>
  );
}

export default Home;
