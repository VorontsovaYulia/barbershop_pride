'use client';

import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { keys } from '@/app/lib/navLinks';

export const MobMenu = ({ animation, onClose }) => {
  const t = useTranslations('Header.navigation');
  const c = useTranslations('Header');
  const locale = useLocale();

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
      className={`fixed top-0 z-20 flex h-full w-full max-w-[375px] transform flex-col items-center gap-16 bg-black transition-transform duration-500 ease-in-out ${
        animation ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        onClick={onClose}
        className="group absolute top-8 right-4"
        aria-label={c('close')}
      >
        <IoClose className="group-hover-fill h-12 w-12" />
      </button>

      <ul className="mt-[136px] flex flex-col items-center gap-8 text-[24px]/[30px]">
        {keys.map(key => (
          <li key={key}>
            <Link
              href={`/${locale}/#${t(`${key}.anchor`)}`}
              scroll={true}
              className="hover-text"
              onClick={onClose}
            >
              {t(`${key}.name`)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="inline-flex items-center justify-end gap-4">
        <span className="text-[16px]/[24px]">SOCIAL</span>
        <div className="w-[80px] border-b"></div>
        <a
          href="https://www.instagram.com/pride_barbershop_kiyv/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="group"
        >
          <IoLogoInstagram className="group-hover-fill h-6 w-6" />
        </a>
      </div>
    </div>
  );
};
