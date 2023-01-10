import React from 'react'
import './experience.css'
import {FaBook} from 'react-icons/fa'

const Experience = () => {
    return(
        <section id='experience'>
            <h5>What skills I have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className="experience__frontend">
                   <h3>Frontend development</h3> 
                   <div className="experience__content">
                        <article className='experience__details'>
                            <FaBook/>
                            <h4>HTML</h4>
                
                        </article>
                        <article className='experience__details'>
                            <FaBook/>
                            <h4>CSS</h4>
               
                        </article>
                        <article className='experience__details'>
                            <FaBook/>
                            <h4>JAVASCRIPT</h4>
                            
                        </article>
                        <article className='experience__details'>
                            <FaBook/>
                            <h4>REACT.JS</h4>
                         
                        </article>
                        <article className='experience__details'>
                            <FaBook/>
                            <h4>VUE.JS</h4>
             
                        </article>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;