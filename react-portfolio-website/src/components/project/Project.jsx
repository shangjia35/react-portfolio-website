import React from 'react'
import './project.css'

const Project = () => {
  return (
    <section id='project'>
      <h2>My Projects</h2>

      <div className='container projects__container'>
        <article className='project__item'>
          <div className='project__item-image'>
            
          </div>

          <h3>title</h3>
          <a href='https://github.com' className='btn'>Github</a>
          
        </article>
      </div>
    </section>
  )
}

export default Project