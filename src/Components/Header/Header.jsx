import React from 'react'
import "./Header.css"
import Links from './Links'
import ME from "../../Assets/Me_2.png"
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header id="#">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yugal Verma</h1>
        <h5 className="text-light">Frontend Developer || ML enthusiast</h5>
        <Links />
        <HeaderSocial />
        <div className="me">
           <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header