import React from 'react'
import CV from "../../Assets/Yugal.pdf"
const Links = () => {
  return (
    <div className="links">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Links