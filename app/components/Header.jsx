'use client';

import { useState } from 'react';
import Image from 'next/image';
import Logo from '@images/logo.png';
import { SlMenu } from 'react-icons/sl';
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import { MobMenu } from './ui/MobMenu';
import { Navigation } from './ui/Navigation';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setAnimation(true);
    }, 100);
  };

  const handleClose = () => {
    setAnimation(false);
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
    <header>
      <div className="relative z-10 flex items-center justify-between px-4 pt-8 xl:px-18 xl:pt-6">
        <Image
          src={Logo}
          alt="Barbershop logo"
          className="h-12 w-12 xl:h-20 xl:w-20"
        />
        <div className="flex gap-12 max-xl:hidden">
          <Navigation />
        </div>
        <div className="flex items-center gap-1 max-xl:hidden">
          <div className="">UA</div>
          <TbTriangleInvertedFilled className="hover:fill-hover h-4 w-4 active:fill-white" />
        </div>

        <button type="button" className="xl:hidden">
          <SlMenu
            className="hover:fill-hover h-8 w-8 active:fill-white"
            onClick={handleOpen}
          />
        </button>
      </div>
      {open && <MobMenu animation={animation} onClose={handleClose} />}
    </header>
  );
};
