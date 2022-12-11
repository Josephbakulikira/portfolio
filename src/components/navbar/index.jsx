import React, {useState} from "react";
import {FaGithub, FaYoutube } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import MyImage from '../../assets/jo.jpg'
import "./style.css";
import {Fade, Slide} from 'react-reveal'

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleClick = () => {
    setNav(current_state => !current_state)
  }

  
  
    return (
    <div style={{zIndex: "5"}} className="mynav fixed w-full h-[80px]  flex justify-between items-center gx-4 text-gray-200">
      <div className="px-4 text-4xl">
        <Fade left>
        <div className="myimage">
          <Link to="home" smooth={true} duration={500}><img src={MyImage} alt="joseph image"/></Link>
        </div>
        </Fade>
      </div>
    
        {/* menu */}
        <Fade right>
        <ul className="mymainnav hidden md:flex">
        <li >
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li >
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li ><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li ><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li ><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
        </Fade>
        {/* hamburger */}
        <Fade right>
        <div onClick={handleClick} className={`myHamburger md:hidden z-10 ${nav ? "is-active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
      </div>
        </Fade>
        {/* mobile menu */}
      <Slide right>
      <ul className={
        !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen mobile_menu flex flex-col justify-center items-center'
      }>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} activeClass="active" to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} activeClass="active" to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className="py-6 text-3xl"><Link onClick={handleClick} activeClass="active" to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className="py-6 text-3xl"><Link onClick={handleClick} activeClass="active" to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li className="py-6 text-3xl"><Link onClick={handleClick} activeClass="active" to="contact" smooth={true} duration={500}>Contact</Link></li>

      </ul>
      </Slide>
        {/* social icons */}
      <Fade left>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul className="socialContainer">
            <li className="w-[130px] h-[40px] flex justify-between items-center br-[20px] ml-[-80px] hover:ml-[-10px] duration-300 bg-[#121212]">
                <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/Josephbakulikira" target="_blank">github<FaGithub size="25" /></a>
            </li>
            <li className="w-[130px] h-[40px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#ff0000]">
                <a className="flex justify-between items-center w-full text-gray-300" href="https://www.youtube.com/@Auctux" target='_blank'>youtube<FaYoutube size="25" /></a>
            </li>
            <li className="w-[130px] h-[40px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#11a2fa]">
                <a className="flex justify-between items-center w-full text-gray-300" href="mailto:bakulikiraj@gmail.com" target='_blank'>Mail<HiOutlineMail size="25" /></a>
            </li>
            <li className="w-[130px] h-[40px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#888888]">
                <a className="flex justify-between items-center w-full text-gray-300" href="./JosephBakulikira.pdf" target='_blank' download>Resume<BsFillPersonLinesFill size="25" /></a>
            </li>
        </ul>
      </div>
      </Fade>

    </div>
  );
}

export default Navbar;
