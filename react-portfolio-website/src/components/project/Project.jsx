import React from 'react'
import './project.css'
import IMG1 from '../../assets/desktop.jpg'
import IMG2 from '../../assets/terminal.webp'
import IMG3 from '../../assets/server.webp'

const Project = () => {
  return (
    <section id='project'>
      <h2>My Projects</h2>

      <div className='container projects__container'>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={IMG1} alt=''></img>
          </div>

          <h3>Personal Website</h3>
          <a href='https://github.com/shangjia35/react-portfolio-website' className='btn'>Github</a>
          
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={IMG2} alt=''></img>
          </div>

          <h3>Unix Shell</h3>
          <ul>
            <li>A shell interpreter that combines the behavior of common shells like bash and csh</li>
          </ul>
          
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={IMG3} alt=''></img>
          </div>

          <h3>HTTP Server</h3>
          <ul>
            <li>A HTTP server that receives requests and sneds information to a HTTP client</li>
          </ul>
          
        </article>


      </div>
    </section>
  )
}

export default Project