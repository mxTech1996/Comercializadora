'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';

export default function TopSection() {
  const urlImage = dataSite.image_hero2;
  return (
    <section
      className='relative bg-cover bg-center min-h-[70vh] flex items-center text-white px-6 md:px-20'
      style={{
        backgroundImage: `url(${urlImage})`,
      }}
    >
      <div className='max-w-2xl z-10'>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='uppercase text-sm text-white/80 mb-3'
        >
          Meet the team
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-5xl font-bold leading-tight mb-4'
        >
          Our team is our greatest asset
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='text-white/90 text-lg'
        >
          We are a multidisciplinary team of experienced professionals in
          management consulting, market analysis, operations strategy, and
          financial planning — all committed to driving results for our clients.
        </motion.p>
      </div>
      <div className='absolute inset-0 bg-black/60 z-0' />
    </section>
  );
}
