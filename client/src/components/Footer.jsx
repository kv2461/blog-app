import React from 'react'
import Logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer>
        <img src={Logo} alt=''/>
        <span>
        &#169; KVCode. All rights reserved.
        </span>
    </footer>
  )
}

export default Footer