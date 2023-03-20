import React from 'react'
import {BsGithub,BsLinkedin} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/Yugal308" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/yugal-verma-28b3671ab/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocial