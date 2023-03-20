import React from 'react'
import "./About.css"
import ME from "../../Assets/Me.jpeg"
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__img">
            <img src={ME} alt="Me" />
          </div>
        </div>
        <div className="about__content">
          <p>
          <span>Computer Science Engineer</span> + MBA graduate with specialisation in <span>Business Analytics</span> and <span>Finance</span>. Skilled in <span>C++</span>, <span>Python</span> and <span>JavaScript</span> languages. 
            Front-end Web Development and Machine Learning enthusiast. Proficient in Front-end libraries like <span>ReactJs</span>, machine learning techniques,<span> deep learning</span> and <span>natural language processing</span>, using frameworks such as <span>TensorFlow</span>. 
            Passionate about staying up-to-date with the latest<span> web development trends</span> and <span>technologies</span>. Looking for opportunities to apply my skills and knowledge to challenging projects and contribute to the growth of a company.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk.</a>
        </div>
      </div>
    </section>
  )
}

export default About
