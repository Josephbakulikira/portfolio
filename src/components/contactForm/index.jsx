import React, {useState, useRef} from 'react'
import GridBackground from '../GridBackground'
import {toast} from 'react-toastify'
import './style.css'
import { Link } from 'react-scroll'
import {Fade, Zoom} from 'react-reveal'
import emailjs from '@emailjs/browser';

function ContactSection() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState('')
    const form = useRef()

    async function handleClickSubmit(e){
        e.preventDefault()
        console.log(form.current)
        if(name !== "" && email !== "" && message !== ""){
            emailjs.sendForm('service_wcl6hfi', 'template_vmgf3c7', form.current, '8Q2K_Ku8lTC4ygO1M')
            .then((result) => {
                toast("Message sent!", {theme: 'dark'})

                setName("")
                setEmail("")
                setMessage("")
            }, (error) => {
                toast.error(error.text);
                // alert(error.text)
            });   
        }else{
            toast.warn('fill all the required field !')
        }
        
    }
    return (
        <Fade >
        <GridBackground/>

        <div name='contact' className='contactSection w-full h-screen  flex justify-center items-center p-4'>
            
            <form className='flex flex-col max-w-[600px] w-full' role='form' ref={form}>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-teal-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4 tagfamily'>{"<p> "} Submit the form below or shoot me an email - <a className="text-cyan-300" href="mailto:bakulikiraj@gmail.com">bakulikiraj@gmail.com</a>{" </p>"}</p>
                </div>
                <input onChange={(e)=>setName(e.target.value)} value={name} className='inputstylecontact  p-2' type="text" placeholder='Name *' name='user_name' required/>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className='inputstylecontact my-4 p-2 ' type="email" placeholder='Email *' name='user_email' required/>
                {/* <input onChange={(e)=>setEmail(e.target.value)} value={email} className='inputstylecontact mb-4 p-2 ' type="number" placeholder='Number' name='user_number' required/> */}

                <textarea onChange={(e)=>setMessage(e.target.value)} value={message} className='inputstylecontact p-2' placeholder='Message *' name='message' rows='10' required>
                    
                </textarea>
                <Link style={{cursor: "pointer"}} to="home" smooth={true} duration={500} onClick={handleClickSubmit} className='text-white border-2 hover:bg-teal-600 hover:border-teal-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</Link>
                
            </form>
        </div>
        </Fade>
    )
}

export default ContactSection
