import React from 'react'
import './about.css'
import ME from '../../assests/my-pic.jpg'
import {FaBook} from 'react-icons/fa'

const About = () => {
    return(
       <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
            <div className='about__me'>
                <div className="about__me-image">
                    <img src={ME} alt='About Image' className='aboutme-img'/>
                </div>
            </div>
            <div className="about__content">
               <div className="about__cards">
                  <article className='about__card'>
                      <FaBook className='about__icon'/>
                      <h5>Experience</h5>
                      <small>1+ years working</small>
                  </article>
                  
                  <article className='about__card'>
                      <FaBook className='about__icon'/>
                      <h5>Projects</h5>
                      <small>20+ completed</small>
                  </article>
               </div>
               <p>
               My journey in tech is on of the best decision have made so far. I am a software Engineer, who loves to code. I'm open  to learn, and work with others. I'm looking forward to work with people and impact the world via tech.
              </p>
              <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
          
           
        </div>
       </section>
    )
}

export default About;