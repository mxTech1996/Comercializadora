'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';

const services = dataSite.products;
export default function Products() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const prev = () => {
    setStartIndex((prev) =>
      prev === 0 ? services.length - visibleCards : prev - 1
    );
  };

  const next = () => {
    setStartIndex((prev) =>
      prev + visibleCards >= services.length ? 0 : prev + 1
    );
  };

  const visibleServices = services.slice(startIndex, startIndex + visibleCards);

  return (
    <section id='products' className='bg-black text-white py-24 px-6 md:px-20'>
      <div className='max-w-6xl mx-auto'>
        <p className='text-[#00FFB2] font-medium mb-3'>Our services</p>
        <div className='md:flex justify-between items-end mb-10'>
          <h2 className='text-4xl md:text-5xl font-extrabold max-w-xl'>
            We offer a range of strategic products.
          </h2>
          <p className='text-white/70 mt-4 md:mt-0 max-w-md'>
            Comprehensive suite of services designed to help organizations
            navigate complex administrative landscapes and achieve their goals.
          </p>
        </div>

        <div className='flex items-center gap-6'>
          <button
            onClick={prev}
            className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full grid place-items-center'
          >
            <FaChevronLeft />
          </button>

          <div className='flex overflow-hidden gap-6 flex-1'>
            {visibleServices.map((service, idx) => {
              const isInCart = validateProductInCart(service.id);
              const handleClick = () => {
                handleAddOrRemoveProduct(service.id);
              };
              return (
                <motion.div
                  key={idx}
                  className='w-full rounded-xl overflow-hidden relative group'
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    className='h-80 bg-cover bg-center relative flex flex-col justify-end p-6'
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0' />
                    <div className='relative z-10'>
                      <p className='text-sm mb-1 opacity-80'>
                        {String(startIndex + idx + 1).padStart(2, '0')}
                      </p>
                      <h3 className='text-2xl font-bold'>{service.name}</h3>
                      <p className='text-sm text-white/80 mt-3'>
                        {service.description}
                      </p>
                      {/* price */}
                      <p className='text-lg font-semibold mt-2'>
                        {service.price}
                      </p>
                      <button
                        onClick={handleClick}
                        className={`mt-4 bg-[#1A2D29] text-white text-sm font-semibold py-2 px-4 rounded-full ${
                          isInCart ? 'bg-red-500' : ''
                        }`}
                      >
                        {isInCart ? 'Remove from cart' : 'Add to cart'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={next}
            className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full grid place-items-center'
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
