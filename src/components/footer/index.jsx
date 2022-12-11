import React from 'react'
import "./style.css"
import AuctuxLogo from '../../assets/weblogo.png'

function FooterSection() {
  return (
    <footer>
        <div className='flex justify-center'>
        <img src={AuctuxLogo} alt='logo' width="70px"/>
        </div>
        <p className='py-4 text-gray-400'>Copyright &copy; {new Date().getFullYear()}, Joseph Bakulikira</p>
    </footer>
  )
}

export default FooterSection