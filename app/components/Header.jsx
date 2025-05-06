'use client';

import { useState } from 'react';
import Image from 'next/image';
import Logo from '@images/logo.png';
import { SlMenu } from 'react-icons/sl';
import { MobMenu } from './ui/MobMenu';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './ui/LanguageSwitcher';

export const Header = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const t = useTranslations('Header');

  const handleOpen = () => {
    document.body.classList.add('overflow-hidden');
    setOpen(true);
    setTimeout(() => {
      setAnimation(true);
    }, 100);
  };

  const handleClose = () => {
    document.body.classList.remove('overflow-hidden');
    setAnimation(false);
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
    <header>
      <div className="relative z-10 items-center justify-between px-4 pt-8 max-xl:flex xl:px-18 xl:pt-6">
        <div className="flex items-center justify-between gap-8">
          <a href="/">
            <Image
              src={Logo}
              alt="Barbershop logo"
              className="h-12 w-12 xl:h-20 xl:w-20"
            />
          </a>
          <ul className="flex gap-12 max-xl:hidden">{children}</ul>
          <LanguageSwitcher />
        </div>
        <button
          type="button"
          className="group xl:hidden"
          aria-label={t('open')}
        >
          <SlMenu className="group-hover-fill h-8 w-8" onClick={handleOpen} />
        </button>
      </div>
      {open && <MobMenu animation={animation} onClose={handleClose} />}
    </header>
  );
};
