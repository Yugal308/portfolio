import React from 'react'
import "./Project.css"
import img1 from "../../Assets/portfolio1.jpg"
import img2 from "../../Assets/portfolio2.jpg"
import img3 from "../../Assets/portfolio3.jpg"
import img4 from "../../Assets/portfolio4.jpg"
import img5 from "../../Assets/portfolio5.png"
import img6 from "../../Assets/portfolio6.jpg"
const Projects = () => {
  return (
  <section id="projects">
      <h5>My Recent Projects </h5>
      <h2>Portfolio</h2>
        <div className="projects__container container">
          <article className="project_item">
            <div className="project_img">
              <img src={img1} alt="image_1" />
            </div>
            <h3>This is project title</h3>
            <div className="project_link">
            <a href="http://github.com/Yugal308" className='btn' target='_blank'>Github</a>
            <a href="http://github.com/Yugal308" className='btn btn-primary' target='_blank'>Live Link</a>
            </div>
          </article>
          <article className="project_item">
            <div className="project_img">
              <img src={img1} alt="image_1" />
            </div>
            <h3>This is project title</h3>
            <div className="project_link">
            <a href="http://github.com/Yugal308" className='btn' target='_blank'>Github</a>
            <a href="http://github.com/Yugal308" className='btn btn-primary' target='_blank'>Live Link</a>
            </div>
          </article>
          <article className="project_item">
            <div className="project_img">
              <img src={img1} alt="image_1" />
            </div>
            <h3>This is project title</h3>
            <div className="project_link">
            <a href="http://github.com/Yugal308" className='btn' target='_blank'>Github</a>
            <a href="http://github.com/Yugal308" className='btn btn-primary' target='_blank'>Live Link</a>
            </div>
          </article>
          <article className="project_item">
            <div className="project_img">
              <img src={img1} alt="image_1" />
            </div>
            <h3>This is project title</h3>
            <div className="project_link">
            <a href="http://github.com/Yugal308" className='btn' target='_blank'>Github</a>
            <a href="http://github.com/Yugal308" className='btn btn-primary' target='_blank'>Live Link</a>
            </div>
          </article>
          <article className="project_item">
            <div className="project_img">
              <img src={img1} alt="image_1" />
            </div>
            <h3>This is project title</h3>
            <div className="project_link">
            <a href="http://github.com/Yugal308" className='btn' target='_blank'>Github</a>
            <a href="http://github.com/Yugal308" className='btn btn-primary' target='_blank'>Live Link</a>
            </div>
          </article>
          <article className="project_item">
            <div className="project_img">
              <img src={img1} alt="image_1" />
            </div>
            <h3>This is project title</h3>
            <div className="project_link">
            <a href="http://github.com/Yugal308" className='btn' target='_blank'>Github</a>
            <a href="http://github.com/Yugal308" className='btn btn-primary' target='_blank'>Live Link</a>
            </div>
          </article>
        </div>
  </section>
  )
}

export default Projects
