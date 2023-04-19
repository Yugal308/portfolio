import React from 'react'
import "./Project.css"
import img1 from "../../Assets/netflix.jpeg"
import img2 from "../../Assets/snorlax.jpeg"
import img3 from "../../Assets/expense.jpeg"
import img4 from "../../Assets/lost.jpeg"
import img5 from "../../Assets/hulu.png"
import img6 from "../../Assets/stock.jpeg"
import img7 from "../../Assets/ecommerce.png"
import img8 from "../../Assets/sales.jpg"
import img9 from "../../Assets/hotel.jpg"
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
            <h3>Netflix Clone</h3>
            <div className="project_link">
            <a href="https://github.com/Yugal308/netflix-clone" className='btn' target='_blank'>Github</a>
            <a href="https://yugal-netflix-clone.netlify.app" className='btn btn-primary' target='_blank'>Live Link</a>
            </div>
          </article>
          <article className="project_item">
            <div className="project_img">
              <img src={img2} alt="image_2" />
            </div>
            <h3>Snorlax - A Virtual Assistant</h3>
            <div className="project_link">
            <a href="https://github.com/Yugal308/Snorlax-A-Virtual-Assstant" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/Yugal308/Snorlax-A-Virtual-Assstant" className='btn btn-primary' target='_blank'>Live Link</a>
            </div>
          </article>
          <article className="project_item">
            <div className="project_img">
              <img src={img3} alt="image_3" />
            </div>
            <h3>Expense Tracker</h3>
            <div className="project_link">
            <a href="https://github.com/Yugal308/expense_tracker" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/Yugal308/expense_tracker" className='btn btn-primary' target='_blank'>Live Link</a>
            </div>
          </article>
          <article className="project_item">
            <div className="project_img">
              <img src={img4} alt="image_4" />
            </div>
            <h3>Lost Connection - The Missing Link</h3>
            <div className="project_link">
            <a href="https://github.com/Yugal308/Lost-Connection-The-missing-link" className='btn' target='_blank'>Github</a>
            <a href="https://lost-connection.netlify.app/" className='btn btn-primary' target='_blank'>Live Link</a>
            </div>
          </article>
          <article className="project_item">
            <div className="project_img">
              <img src={img5} alt="image_5" />
            </div>
            <h3>HULU Clone</h3>
            <div className="project_link">
            <a href="https://github.com/Yugal308/Hulu-Clone" className='btn' target='_blank'>Github</a>
            <a href="https://hulu-clone23.netlify.app/" className='btn btn-primary' target='_blank'>Live Link</a>
            </div>
          </article>
          <article className="project_item">
            <div className="project_img">
              <img src={img6} alt="image_6" />
            </div>
            <h3>Stock Price Predictor</h3>
            <div className="project_link">
            <a href="https://github.com/Yugal308/Stock_Price_Predictor" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/Yugal308/Stock_Price_Predictor" className='btn btn-primary' target='_blank'>Live Link</a>
            </div>
          </article>
          <article className="project_item">
            <div className="project_img">
              <img src={img7} alt="image_7" />
            </div>
            <h3>React Ecommerce Site</h3>
            <div className="project_link">
            <a href="https://github.com/Yugal308/ecommerce" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/Yugal308/ecommerce" className='btn btn-primary' target='_blank'>Live Link</a>
            </div>
          </article>
          <article className="project_item">
            <div className="project_img">
              <img src={img8} alt="image_8" />
            </div>
            <h3>Sales Dashboard</h3>
            <div className="project_link">
            <a href="https://github.com/Yugal308" className='btn' target='_blank'>Github</a>
            <a href="https://lookerstudio.google.com/reporting/4cdc51df-ed33-4f20-8771-e8c68c5a38cf" className='btn btn-primary' target='_blank'>Live Link</a>
            </div>
          </article>
          <article className="project_item">
            <div className="project_img">
              <img src={img9} alt="image_9" />
            </div>
            <h3>Hotel Booking Data Analysis</h3>
            <div className="project_link">
            <a href="https://github.com/Yugal308/Hotel-Booking-Data-Analysis" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/Yugal308/Hotel-Booking-Data-Analysis" className='btn btn-primary' target='_blank'>Live Link</a>
            </div>
          </article>
        </div>
  </section>
  )
}

export default Projects
