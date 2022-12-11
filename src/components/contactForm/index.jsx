import React, {useState} from 'react'
import GridBackground from '../GridBackground'
import {toast} from 'react-toastify'
import './style.css'
import { Link } from 'react-scroll'

function ContactSection() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState('')

    function handleClickSubmit(e){
        e.preventDefault()
        toast("Message sent!", {theme: 'dark'})

        setName("")
        setEmail("")
        setMessage("")
    }
    return (
        <>
        <GridBackground/>
        <div name='contact' className='contactSection w-full h-screen  flex justify-center items-center p-4'>
            <form action='' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-teal-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4 tagfamily'>{"<p> "} Submit the form below or shoot me an email - <a className="text-cyan-300" href="mailto:bakulikiraj@gmail.com">bakulikiraj@gmail.com</a>{" </p>"}</p>
                </div>
                <input onChange={(e)=>setName(e.target.value)} value={name} className='inputstylecontact  p-2' type="text" placeholder='Name' name='name' required/>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className='inputstylecontact my-4 p-2 ' type="email" placeholder='Email' name='email' required/>
                <textarea onChange={(e)=>setMessage(e.target.value)} value={message} className='inputstylecontact p-2' placeholder='Message' name='message' rows='10' required>
                    
                </textarea>
                <Link to="home" smooth={true} duration={500} onClick={handleClickSubmit} className='text-white border-2 hover:bg-teal-600 hover:border-teal-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</Link>

            </form>
        </div>
        </>
    )
}

export default ContactSection
