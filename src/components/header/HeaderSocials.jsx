import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {GrTwitter} from 'react-icons/gr'


const HeaderSocials = () => {
  return (
    <div className='header__social'>
        <a href='https://linkendin.com' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com' target='_blank'><FaGithub/></a>
        <a href='https://email .com' target='_blank'><MdEmail /></a>
        <a href='twitter.com' target='_blank'><GrTwitter /></a>
    </div>
  )
}

export default HeaderSocials;