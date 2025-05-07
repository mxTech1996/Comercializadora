'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const services = dataSite.services;
export default function AdminServiceShowcase() {
  return (
    <section id='services' className='bg-black text-white px-6 md:px-20 py-24'>
      <div className='max-w-5xl mx-auto text-center mb-16'>
        <p className='text-sm uppercase text-[#FDB813] mb-2'>Our Services</p>
        <h2 className='text-4xl font-bold leading-tight'>
          We offer a range of <br className='md:hidden' /> administrative
          consulting services.
        </h2>
      </div>

      <div className='grid md:grid-cols-3 gap-10 max-w-6xl mx-auto'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className='relative group overflow-hidden rounded-lg shadow-lg h-[400px] bg-black'
          >
            <img
              src={service.image}
              alt={service.title}
              className='absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end'>
              <p className='text-sm text-[#94A3B8] font-medium mb-1'>
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-white/80 text-sm mb-4'>
                {service.description}
              </p>
              {/* <button className='bg-white text-black text-sm px-4 py-2 rounded-full font-medium w-fit hover:bg-gray-200 transition'>
                Learn More
              </button> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
