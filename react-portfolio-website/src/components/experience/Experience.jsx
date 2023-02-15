import React from 'react'
import './experience.css'
import {SiPointy} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div>
          <h3>Undergraduate Data Science Researcher</h3>
          <h4>The Data Mine - Purdue University</h4>
          <div className='experience__content'>
            <li>
            <SiPointy className='experience__content-icon'/>
            <h5>
              Collaborate with Indiana Family and Social Services Administration (FSSA) 
              on analyzing data about people with disabilities
            </h5>
            </li>
            <SiPointy className='experience__content-icon'/>
            <h5>
              Trained to use Microsoft Azure, Tableau, and SQL
            </h5>
          </div>
        </div>

        <div>
          <h3>Teaching Assistant</h3>
          <h4>Purdue University</h4>
          <div className='experience__content'>
            <SiPointy className='experience__content-icon'/>
            <h5>
              UTA for Computer Architecture and Systems Programming
            </h5>
            <SiPointy className='experience__content-icon'/>
            <h5>
              Provided students with insight and guidance in lab sessions and office hours
            </h5>
          </div>
        </div>

        <div>
          <h3>Participant and Winner of the Pitch Program</h3>
          <h4>TechPoint</h4>
          <div className='experience__content'>
            <SiPointy className='experience__content-icon'/>
            <h5>
              Collaborated with teammates and generated ideas 
              for recycling electric vehicle batteries
            </h5>
            <SiPointy className='experience__content-icon'/>
            <h5>
              Developed an app prototype with Figma 
              which monitors status of bus stations that reuse EV batteries
            </h5>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience