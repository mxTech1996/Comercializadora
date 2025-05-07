'use client';

import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// icon cart react-icons
import { FaShoppingCart } from 'react-icons/fa';

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const navItems = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/#about',
  },
  {
    name: 'Services',
    link: '/#services',
  },
  {
    name: 'Testimonials',
    link: '/#testimonials',
  },
  {
    name: 'Products',
    link: '/#products',
  },
  {
    name: 'Contact',
    link: '/more-information',
  },
];

function Navbar() {
  const { products } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#1A2D29] text-white shadow-lg'
          : 'bg-transparent text-white'
      )}
    >
      <nav className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>
        {/* logo */}
        <div className='flex items-center space-x-2'>
          <img
            src={dataSite.iconImage}
            alt='Logo'
            className='w-20 h-20 object-cover rounded-full'
          />
          <div className='font-bold text-lg tracking-wide'>EVERMARK</div>
        </div>
        <ul className='hidden md:flex space-x-6 font-medium'>
          {navItems.map((item, i) => (
            <Link key={i} href={item.link}>
              <li className='hover:text-[#FDB813] cursor-pointer transition'>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* cart */}

        <div className='relative'>
          <Link href='/my-cart'>
            <FaShoppingCart className='text-2xl' />
            {products.length > 0 && (
              <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full px-1'>
                {products.length}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
