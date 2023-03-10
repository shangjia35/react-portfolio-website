import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com" target="_black"><BsLinkedin></BsLinkedin></a>
        <a href="http://github.com" target="_black"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials