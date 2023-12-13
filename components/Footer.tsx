 "use client"
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll behavior
    });
  };
   
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const EventEmitter = require('events');
  const emitter = new EventEmitter();
  
  // Increase the limit for this particular EventEmitter instance
  emitter.setMaxListeners(15); // Set it to the desired number
  
  // Adding listeners
  emitter.on('someEvent', () => {
    // Handle the event
  });
  


  return (
    <section>
      {isVisible && (
  <button 
      type='submit'
      className='fixed bottom-4 right-4 bg-gray-800
       text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700
        focus:outline-none focus:ring focus:ring-gray-300'
    onClick={scrollToTop}
    >
      </button>
      )}
      </section>  
  )
}

export default Footer