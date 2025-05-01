'use client';

import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';
import { Navigation } from './Navigation';

export const MobMenu = ({ animation, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed top-0 z-10 flex h-full w-full max-w-[375px] transform flex-col items-center gap-16 bg-black transition-transform duration-500 ease-in-out ${
        animation ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button onClick={onClose} className="absolute top-8 right-4">
        <IoClose className="hover:fill-hover h-12 w-12 active:fill-white" />
      </button>

      <div className="mt-[136px] flex flex-col items-center gap-8 text-[24px]/[30px]">
        <Navigation onClose={onClose} />
      </div>

      <div className="inline-flex items-center justify-end gap-4">
        <span className="text-[16px]/[24px]">SOCIAL</span>
        <div className="w-[80px] border-b"></div>
        <a
          href="https://www.instagram.com/pride_barbershop_kiyv/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <IoLogoInstagram className="hover:fill-hover h-6 w-6 active:fill-white" />
        </a>
      </div>
    </div>
  );
};
