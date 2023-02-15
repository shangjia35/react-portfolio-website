import React from 'react'
import './experience.css'
import {SiPointy} from 'react-icons/si'
import {VscDebugBreakpointConditional} from 'react-icons/vsc'
import {AiOutlineCheck} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div>
          <h3>Undergraduate Data Science Researcher</h3>
          <h4>The Data Mine - Purdue University</h4>

          <ul className='experience__content'>
            <li>
              
              <p>
                Collaborate with Indiana Family and Social Services Administration (FSSA) 
                on analyzing data about people with disabilities
              </p>
            </li>
            <li>
              
              <p>
                Trained to use Microsoft Azure, Tableau, and SQL
              </p>
            </li>
          </ul>

        </div>

        <div>
          <h3>Teaching Assistant</h3>
          <h4>Purdue University</h4>

          <ul className='experience__content'>
            <li>
              
              <p>
                UTA for Computer Architecture and Systems Programming
              </p>
            </li>
            <li>
              
              <p>
                Provided students with insight and guidance in lab sessions and office hours
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h3>Participant and Winner of the Pitch Program</h3>
          <h4>TechPoint</h4>
          
          <ul className='experience__content'>
            <li>
              <p>
                Collaborated with teammates and generated ideas 
                for recycling electric vehicle batteries
              </p>
            </li>
            <li>
              <p>
                Developed an app prototype with Figma 
                which monitors status of bus stations that reuse EV batteries
              </p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Experience