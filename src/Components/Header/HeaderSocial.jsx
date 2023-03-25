import React from 'react'
import {BsGithub,BsLinkedin} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/Yugal308" target="_blank" rel="noreferrer"><BsGithub/><span className='header_active'>Github</span></a>
        <a href="https://www.linkedin.com/in/yugal-verma-28b3671ab/" target="_blank" rel="noreferrer"><BsLinkedin/><span className='header_active'>Linkedin</span></a>
    </div>
  )
}

export default HeaderSocial