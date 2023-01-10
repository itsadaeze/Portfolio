import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return(
        <footer>
           <a href='#' className='footer__logo'>ADAEZE</a>

           <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#About'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#Portfolio'>Portfolio</a></li>
            <li><a href='#Contact'>Contact</a></li>
           </ul>

           <div className='footer__socials'>
            <a href='http://facebook.com'><BsFacebook/></a>
            <a href='http://instagram.com'><BsInstagram/></a>
            <a href='http://twitter.com'> <FaTwitter/></a>
           </div>
           <div className='footer__copyright'>
            <small>&copy; ADAEZE. All rights reserved</small>
           </div>
        </footer>
    )
}

export default Footer;