"use client"
import { PROJECTS } from '@/constants'
import React from 'react'

import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";



const Projects = () => {
  return (
    <section
    id='/project'
    >
      <h2 className='font-black font-sans text-3xl text-gray-300'>Recent Projects</h2>
      <p className='text-white font-sans text-xl'>
      In my portfolio, I present a dynamic collection of projects that showcase my expertise in Responsive Web Design,
       mastery of JavaScript Algorithms and Data Structures, proficiency in FrontEnd Development, 
       adeptness in Relational Databases, and prowess in Data Visualization. 
       These experiences reflect my commitment to crafting engaging, user-centric web solutions
        while leveraging robust data-driven insights.
        </p>
    <h4 className="text-gray-300 font-bold mb-4 text-2xl ">Each project is described
     with links to code repositories.</h4>
     {PROJECTS.map((project) => (
         <Card className='py-4 mb-6'>
         <CardBody className="overflow-visible py-2">
        <Image 
         isZoomed
        src={project.image}
        alt={project.name}
        width={500}
        height={150}
        className='object-cover rounded-xl'
        />
        </CardBody>

        <CardHeader className="pb-0 pt-2 px-4 flex-col
         items-start">
        <p className='hidden'>{project.description}</p>
        <p className='font-black'>GitHub Code: </p> <a className='cursor-pointer hover:underline' href={project.source_code_link}
       >{project.source_code_link}</a>
       <p className='font-black'>Deployed Version:</p> 
        <a className='cursor-pointer hover:underline'
        href={project.deploy_link}>{project.deploy_link}</a>
       </CardHeader>
        </Card>
     ))}

    </section>
  )
}

export default Projects