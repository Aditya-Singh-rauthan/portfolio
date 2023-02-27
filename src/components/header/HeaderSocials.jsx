import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="www.linkedin.com" target={'_blank'}><BsLinkedin/></a>
        <a href="www.github.com" target={'_blank'}><BsGithub/></a>
        <a href="www.github.com" target={'_blank'}><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials