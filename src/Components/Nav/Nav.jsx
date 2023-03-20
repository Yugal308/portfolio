import React,{useState} from 'react'
import {AiOutlineHome,AiOutlineUser,AiOutlineProject} from 'react-icons/ai'
import {VscTools} from 'react-icons/vsc'
import {BiMessageSquareDetail} from 'react-icons/bi'
import "./Nav.css"
const Nav = () => {
  const [active,setActive] = useState('#');
  return (
    <nav>
        <a href="#" 
           onClick={()=>setActive('#')}
           className={active === '#' ? 'active' : ''}>
            <AiOutlineHome/>
        </a>
        <a href="#about"
           onClick={()=>setActive('#about')}
           className={active === '#about' ? 'active' : ''}>
            <AiOutlineUser/>
          </a>
        <a href="#skills"
           onClick={()=>setActive('#skills')}
           className={active === '#skills' ? 'active' : ''}>
          <VscTools/>
        </a>
        <a href="#projects"
           onClick={()=>setActive('#projects')}
           className={active === '#projects' ? 'active' : ''}>
            <AiOutlineProject/>
        </a>
        <a href="#contact"
           onClick={()=>setActive('#contact')}
           className={active === '#contact' ? 'active' : ''}>
            <BiMessageSquareDetail/>
        </a>
    </nav>
    )
}

export default Nav