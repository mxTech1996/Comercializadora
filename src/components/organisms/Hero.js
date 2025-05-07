'use client';

import { dataSite } from '@/data';

function Hero() {
  const urlImage = dataSite.services[1].image;
  return (
    <section
      className='relative bg-cover bg-center min-h-screen flex items-center justify-between px-6 md:px-20 text-white'
      style={{ backgroundImage: `url(${urlImage})` }}
    >
      <div className='max-w-2xl py-20 z-10'>
        <p className='text-sm uppercase tracking-wide mb-3 flex items-center gap-2'>
          <span className='inline-block w-2 h-2 bg-[#FDB813] rounded-full'></span>
          Expert guidance, measurable results
        </p>
        <h1 className='text-5xl font-extrabold mb-6 leading-tight'>
          We streamline your <br /> administration processes
        </h1>
        <p className='text-lg text-white/90 mb-8'>
          Our firm offers tailored administrative consulting services to help
          you optimize workflows, ensure compliance, and scale efficiently.
        </p>
        <button className='bg-white text-black hover:bg-gray-100 transition px-6 py-3 rounded-full font-semibold'>
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
}

export default Hero;
