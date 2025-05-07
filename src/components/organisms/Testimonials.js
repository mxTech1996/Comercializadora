'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { dataSite } from '@/data';

const testimonials = dataSite.references;

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id='testimonials'
      className='bg-black text-white py-24 px-6 md:px-20'
    >
      <div className='max-w-6xl mx-auto'>
        <p className='text-[#00FFB2] font-medium mb-3'>Testimonials</p>
        <div className='grid md:grid-cols-5 gap-12 items-center'>
          <div className='bg-[#133A36] p-6 rounded-md col-span-2'>
            <p className='text-5xl font-serif leading-none mb-4'>“</p>
            <p className='text-sm text-white/80'>
              We are incredibly proud of the clients we serve. Each partnership
              is a testament to the trust and collaboration we’ve built over the
              years.
            </p>
          </div>

          <div className='col-span-3 relative'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className='text-2xl font-medium leading-relaxed mb-6'>
                  “{testimonials[index].description}”
                </blockquote>
                <div>
                  <p className='font-semibold'>{testimonials[index].name}</p>
                  <p className='text-sm text-white/70'>Client</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className='absolute bottom-0 right-0 flex gap-3 mt-6'>
              <button
                onClick={prev}
                className='w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition grid place-items-center'
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={next}
                className='w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition grid place-items-center'
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
