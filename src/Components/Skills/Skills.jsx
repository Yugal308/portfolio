import React from 'react'
import "./Skills.css"
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Skills = () => {
  return (
    <section id="skills">
      <h5>The Skills that I have</h5>
      <h2>My Experience</h2>
      <div className="container skills__container">
        <div className="skill_web">
          <h3>
            Web Development
          </h3>
          <div className="skill_content">
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </aricle>
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </aricle>
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </aricle>
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
              <div>
                <h4>ReactJs</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </aricle>
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </aricle>
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </aricle>
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
              <div>
                <h4>NodeJs</h4>
              <small className='text-light'>Basic</small>
              </div>
            </aricle>
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </aricle>
          </div>
        </div>
        <div className="skill_ml">
          <h3>
            Machine Learning
          </h3>
          <div className="skill_content">
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </aricle>
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
              <div>
              <h4>Neural Networks</h4>
              <small className='text-light'>Basic</small>
              </div>
            </aricle>
           
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
              <div>
              <h4>R</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </aricle>
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
              <div>
              <h4>NLP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </aricle>
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
             <div> <h4>Computer Vision</h4>
              <small className='text-light'>Basic</small>
              </div>
            </aricle>
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
              <div>
              <h4>Data Science</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </aricle>
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
              <div>
              <h4>Reinforcement Learning</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </aricle>
            <aricle className="skill_details">
              <BsFillPatchCheckFill className='skill_icon' />
              <div>
              <h4>Artificial Intelligence</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </aricle>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
