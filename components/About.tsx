 "use client"
import Image from 'next/image'
import React from 'react'

import {Progress} from "@nextui-org/react";

// Hidden Image included, unhide
const About = () => {

  return (
    <section className='block'
    id='/about'>

      <h1 className='py-5 text-2xl text-white font-sans font-black'>About Me</h1>
      <div className='inline-block'>
        <div className='flex justify-center relative'>
        <Image 
      src="/bdd.jpg"
      alt='My Profile Pic.'
      width={500}
      height={700}
      className='relative '
      />

    <Image 
      src="/experience.jpg" 
      alt='Experience'
      width={40}
      height={5}
      className='bottom-1 absolute z-[2] right-6'
      />
      
      </div>
     
      <h3 className='text-gray-200 font-sans text-2xl'>Hi, I'm <span className='font-bold'>Tewogbade Daniel</span></h3>
      <p className='text-white font-sans text-xl py-5'>I'm a skilled software developer with experience in HTML, CSS, Tailwind CSS, TypeScript and
      JavaScript, and expertise in frameworks like React, Node.js, Next.js and
      Three.js. I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Let's work together to bring your ideas to life!
      </p>
      </div>

       
      <h2 className='font-sans text-white text-3xl text-left font-black'>My Skills and Competencies</h2>
       <p className='text-white text-xl font-sans mb-3'>My Skillset includes Programming Languages, frameworks and databases gained from hands-on experiences and certifications from credible platforms including: 
        <br />FreeCodeCamp, mdn Web docs, W3 Schools, JS Mastery
       </p>
       <div className='text-white py-6 text-2xl grid grid-flow-cols justify-stretch '>
          <div className='mb-6'> 
             <h3>HTML</h3>
             <Progress
      aria-label="Downloading..."
      size="md"
      value={90}
      color="success"
      showValueLabel={true}
      className="max-w-md font-black"
    />
       </div>
          <div className='mb-6'> 
             <h3>CSS, TailWind CSS</h3>
             <Progress
      aria-label="Downloading..."
      size="md"
      value={80}
      color="success"
      showValueLabel={true}
      className="max-w-md font-black"
    />
          </div>
          <div className='mb-6'> 
             <h3>JavaScript Algorithms and Data Structures</h3>
             <Progress
      aria-label="Downloading..."
      size="md"
      value={75}
      color="success"
      showValueLabel={true}
      className="max-w-md font-black"
    />
          </div>
          <div className='mb-6'> 
             <h3>FrontEnd Development and Libraries</h3>
             <Progress
      aria-label="Downloading..."
      size="md"
      value={80}
      color="success"
      showValueLabel={true}
      className="max-w-md font-black"
    />
          </div>
          <div className='mb-6'> 
             <h3>Git</h3>
             <Progress
      aria-label="Downloading..."
      size="md"
      value={90}
      color="success"
      showValueLabel={true}
      className="max-w-md font-black"
    />
          </div>
          <div className='mb-6'> 
             <h3>MySQL</h3>
             <Progress
      aria-label="Downloading..."
      size="md"
      value={65}
      color="success"
      showValueLabel={true}
      className="max-w-md font-black"
    />
          </div>
          <div className='mb-6'> 
             <h3>TypeScript</h3>
             <Progress
      aria-label="Downloading..."
      size="md"
      value={70}
      color="success"
      showValueLabel={true}
      className="max-w-md font-black"
    />
          </div>
       </div>
       <div className='py-3'>
       </div>
    </section> 
  )
}

export default About