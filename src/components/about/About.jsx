import React from 'react'
import AboutAvatar from '../../assests/avatar-2.png'
import './About.css'
import AboutBox from './AboutBox'

const About = () => {
  return (
    <div>
      <section className="about container section" id='about' >
        <h2 className="section__title">About Me</h2>
        <div className="about__container grid">
          <img src={AboutAvatar} alt="" className="about__img" />
          <div className="about__data grid">
            <div className="about__info">
              <p className="about__description"> Hi! I'm Haseeb Ahmad
                I'm a Software and Database Developer from Canada with over
                7 years of experience.<br></br> My expertise spans developing robust software solutions.
              </p>
              <a href="" className="btn">Download Resume</a>
              </div>
              <div className="about__skills grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">ASP.NET</h3>
                    <span className="skills__number ">90%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage ASP"></span>
                  </div>


                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">APEX / Salesforce</h3>
                    <span className="skills__number">95%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage APEX"></span>
                  </div>


                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name"> Server </h3>
                    <span className="skills__number">70%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage SQL"></span>
                  </div>


                </div>

              </div>
            </div>
          </div>
<AboutBox/>
   
      </section>
    </div>
  )
}

export default About
