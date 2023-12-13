"use client"
import { Card, Link, CardHeader, CardBody, CardFooter, Divider,} from '@nextui-org/react'
import React from 'react'


const Service = () => {
  return (
    <section className='text-white text-left py-9'
    id='/service'>
      <h2 className='font-black font-sans 
      text-3xl mb-5'>Services I Offer </h2>

   <Card className='max-w-[400px] mb-6'>          
   <CardHeader className="flex gap-3">
    FrontEnd Development
   </CardHeader>
   <Divider />
    <CardBody>
      <div className="flex flex-col">
        Responsive Interfaces <br />
      Interactive User Experiences  <br />
       JavaScript Frameworks 
       </div>
       </CardBody>
    </Card>

   <Card className='max-w-[400px] mb-6'>          
   <CardHeader className="flex gap-3">
    BackEnd Development
   </CardHeader>
   <Divider />
    <CardBody>
      <div className="flex flex-col">
      Server-side Solutions  <br />
     API Development <br />
     Database Architecture
       </div>
       </CardBody>
    </Card>

   <Card className='max-w-[400px] mb-6'>          
   <CardHeader className="flex gap-3">
    Data Visualization
   </CardHeader>
   <Divider />
    <CardBody>
      <div className="flex flex-col justify-between">
      Data Analysis    <br />
    Insightful Visualizations
       </div>
       </CardBody>
    </Card>

   <Card className='max-w-[400px] mb-5'>          
   <CardHeader className="flex gap-3">
    UI/UX Design
   </CardHeader>
   <Divider />
    <CardBody>
      <div className="flex flex-col">
      User-Centric Design <br />
    Visual Interface Design
       </div>
       </CardBody>
    </Card>

    </section>
  )
}

export default Service