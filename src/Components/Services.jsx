import React from 'react';
import pickup from '../assets/sewage.jpeg';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className='md:mx-10 mt-20' id='services'>
      <div className='md:mx-24'>
        <div className="card lg:card-side bg-base-100 shadow-xl flex">
          <figure className="w-1/2"><img src={pickup} alt="Album" className='h-full w-full object-cover'/></figure>
          <div className="card-body w-1/2 p-4">
            <h2 className="card-title">Clean area provide good health!</h2>
            <p>Sanitation is not merely a convenience but an absolute necessity for maintaining public health and hygiene. Without proper sanitation infrastructure and practices, communities are susceptible to a plethora of diseases and environmental hazards. The lack of adequate sanitation facilities leads to the contamination of water sources, proliferation of disease-causing pathogens, and the spread of infections among individuals.
              It is disheartening to witness the persistent neglect of sanitation concerns in our community. The absence of accessible toilets, proper sewage systems, and waste management facilities not only compromises our health but also degrades our environment. The stench of untreated waste and the sight of littered streets are constant reminders of this dire situation.</p>
            <div className="card-actions justify-end">
              <Link to="/pickuplogin"><button className="btn bg-[#dc2626] hover:bg-[#ea580c] rounded-full text-white">Complain</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
