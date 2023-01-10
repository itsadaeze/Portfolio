import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {FaUserAlt} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {GrProjects} from 'react-icons/gr'
import {BsTelephoneFill} from 'react-icons/bs'
import { useState } from 'react'

const Nav = ()=> {
    const [activeNav, setActiveNav] = useState('#')

    return(
        <nav >
            <a href='#' onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''}><BiHome/></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt/></a>
            <a href='#experience'  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook/></a>
            <a href='#portfolio'  onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GrProjects/></a>
            <a href='#contact'  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsTelephoneFill/></a>
        </nav>
    )
}

export default Nav;