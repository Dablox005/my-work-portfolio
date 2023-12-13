 "use client"
import { SOCIAL_ICONS, SPECIALIZATIONS } from '@/constants'
import { Button } from '@nextui-org/react';
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { MoonIcon } from './MoonIcon';
import Link from 'next/link';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
      prevIndex === SPECIALIZATIONS.length - 1 ? 0 : prevIndex + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]); // return () => clearInterval(interval); 
  // cleans up the interval when the component unmounts or currentIndex changes.


  const downloadPDF = () => {
    const pdfURL = 'https://drive.google.com/file/d/1yNzM9nsjD5kzoCIF7dft8sv3bFiw00r5/view?usp=download';
    const link = document.createElement('a');
    link.href = pdfURL;
    link.setAttribute('download', 'Tewogbade Daniel_Resume.pdf'); // Specify the desired filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


  }

  return (
    <section 
     id='/home'
    className='
    dark:bg-slate-800 dark:border-slate-500
     border-b rounded-t-xl
     p-4 pb-6 sm:p-10 sm:pb-8 
     lg:p-6 xl:p-10 xl:pb-8 space-y-6 
    sm:space-y-8 lg:space-y-6 xl:space-y-8'>
        <Image 
        src="/bdd.jpg"
        alt="My Profile Pic."
        height={250}
        width={250}
        className='block mx-auto rounded-full object-contain 
        md:object-scale-down'
        />
        
      <h2 className='text-white  font-black text-2xl hover:text-3xl cursor-default text-center' >Hello, I'm Tewogbade Daniel</h2>
      <ul className='flex flex-col'>
        {SPECIALIZATIONS.map((desc, index) => (
        <li
        className={`text-slate-600 font-sans
         text-center text-5xl ${index === currentIndex ? 
          'block cursor-pointer animate-bounce hover:bg-gradient-to-r from-green-100 hover:text-white' : 'hidden'}
          `}
         key={desc.label}
        >
          {desc.label}
          </li>
      ))}
      </ul>
      <p className='text-center text-indigo-50 font-black select-none'>I'm a FrontEnd Developer (Next JS Developer) based in Lagos,
       Nigeria, with over 3years of experience</p>
      
      {/* SOCIAL ICONS SECTION */}
       <ul className='flex justify-evenly'>
        {SOCIAL_ICONS.map((icon) => (
          <div className='items-center  gap-3'>
           <Link
            href={icon.href}>
          <Image
           src={icon.src}
           width={30}
           height={30}
           alt={icon.label}
           className='cursor-pointer hover:scale-[1.4] mb-2 hover:bg-green-500 ' 
          />
          </Link>
          </div>
        ))}
      </ul>
  <div className='text-center mb-6'>
      <Button
       color="primary" 
       variant="ghost"  
        type='submit'
        className='text-white font-black'
        onClick={downloadPDF}
      >
        Download CV
      </Button>
      </div>

    </section>
  )
}

export default Home;



