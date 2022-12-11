import React from 'react'
import "./style.css"
import AuctuxLogo from '../../assets/weblogo.png'
import {FaGithub, FaYoutube} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

function FooterSection() {
  return (
    <footer>
        <div className='flex justify-center'>
        <img src={AuctuxLogo} alt='logo' width="70px"/>
        </div>
        <ul className='flex justify-center'>
        <li className=" footerIcon flex items-center bg-[#12121266]">
                <a className=" text-gray-300" href="https://github.com/Josephbakulikira" target="_blank"><FaGithub size="30" /></a>
            </li>
            <li className=" footerIcon flex items-center  bg-[#ff000066]">
                <a className=" text-gray-300" href="https://www.youtube.com/@Auctux" target='_blank'><FaYoutube size="30" /></a>
            </li>
            <li className=" footerIcon flex items-center  bg-[#11a2fa66]">
                <a className=" text-gray-300" href="mailto:bakulikiraj@gmail.com" target='_blank'><HiOutlineMail size="30" /></a>
            </li>
            <li className=" footerIcon flex items-center  bg-[#88888866]">
                <a className=" text-gray-300" href="./JosephBakulikira.pdf" target='_blank' download><BsFillPersonLinesFill size="30" /></a>
            </li>
        </ul>
        <p className='py-4 text-gray-400'>Copyright &copy; {new Date().getFullYear()}, Joseph Bakulikira</p>
    </footer>
  )
}

export default FooterSection