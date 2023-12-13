"use client"
import React, {useState, useRef } from 'react';
import emailjs from "@emailjs/browser"
import { Button, Input, Textarea } from '@nextui-org/react';


const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "", 
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;

    setForm({ ...form, 
      [name]: value,
     });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault(); stops the browser from refreshing after clicking the submit button.
    e.preventDefault();
    setLoading(true);

  
   emailjs.send(
      'service_cpa04f7', 
      'template_jorb027',
            {
                  from_name: form.name,
                  to_name: 'Daniel',
                  from_email: form.email,
                  to_email: 'tewogbadedaniel005@gmail.com',
                  message: form.message
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      alert('Thank you, I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)

      console.log(error);

      alert('Something went wrong.')
    })
}

  return (
    <section className='py-7 cursor-pointer'>
      <p className='text-3xl mb-0 text-white'>Contact Form</p>
      <form 
        id="/contact"
       ref={formRef}
       onSubmit={handleSubmit}
       className='mt-12 flex flex-col gap-8'
      >
        <label className='flex flex-col'>
        <span className="text-white font-medium" >Your Name</span>
        <Input 
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Enter your name here"
          className='bg-tertiary py-4 px-6
          placeholder:text-secondary
          text-white rounded-lg outlined-none
          border-2 font-medium'
        />
        </label>
        <label className='flex flex-col'>
        <span className="text-white font-medium" >Your Email</span>
        <Input 
          type="email"
          name="email"
          label="Email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Enter your email here"
          className='bg-tertiary py-4 px-6
          placeholder:text-secondary
          text-white rounded-lg outlined-none
          border-2 font-medium'
        />
        </label>

        <label className='flex flex-col'>
        <span className="text-white font-medium" >Your Message</span>
        <Textarea 
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Please enter your message here..."
          className='py-4 px-6
          placeholder:text-secondary
          text-white rounded-lg outlined-none
          border-2 font-black text-2xl'
        />
        </label>
        
        <Button 
         color="primary" 
         variant="ghost"  
        type='submit'
          className='bg-tertiary py-3 px-8 outline-none w-fit
           text-white font-bold 
           shadow-md shadow-primary rounded-xl'
        >
          {loading ? 'Sending...' : 'Send'}

        </Button>
        </form>
    </section>
  )
}

export default Contact