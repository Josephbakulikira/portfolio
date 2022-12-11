import React from 'react'
import "./style.css"
import GridBackground from '../GridBackground'
import skills from '../../constants/skills'

function Skills() {

    
    return (
        <>
        <GridBackground/>
        <div name='skills' className='w-full h-screen '>
            <div className='max-w-[1000px]  mx-auto p-4 justify-center w-full h-full text-gray-300 skillscontainer'>
                <div>
                    <p className='font-bold inline border-b-4 border-teal-600 text-3xl'>Skills</p>
                    <p className='tagfamily py-4'>{"<p> "}These are the technologies I've worked with{" </p>"}</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {
                        skills.map(skill => (
                            <div key={skill.id} className='project-tile shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                                <img className='w-20 mx-auto' src={skill.imageSrc} alt="csharp image"/>
                                <p className='my-4'>{skill.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills
