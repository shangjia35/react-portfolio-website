import React from 'react'
import './about.css'
import ME from '../../assets/mypiczoo.jpg'

const About = () => {
  return (
    <section id='about'>
      <h2>A little bit about me...</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>

        <div className="about__content">
          <p>
            I am a junior in Computer Science at Purdue University with minors in Mathematics and Music History & Theory. 
            My concentration is machine intelligence.
            I am also an undergraduate data science researcher at Purdue University.
          </p>
          <p>
            I like music and enjoy playing the piano in my spare time. 
          </p>
        </div>
        
        
      </div>
    </section>
  )
}

export default About