import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/my-img.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return(
       <header>
         <div className="container header___container">
            <h5>Hello I'm</h5>
            <h1>Ugwu Adaeze</h1>
            <h5 className='text-light'>Frontend Developer</h5>
            <CTA />
            <HeaderSocials />
         </div>
         <div className='me'>
            <img src={ME} alt='my-image' className='my-image'/>
         </div>
         <a href='#contact' className='scroll__down'>Scroll Down</a>
       </header>
    )
}

export default Header;