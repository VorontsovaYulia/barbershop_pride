import Image from 'next/image';
import Logo from '@images/logo.png';
import { FaRegCopyright, FaInstagram } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="relative flex flex-col justify-center px-4 pt-8 pb-4 xl:px-18 xl:pt-10 xl:pb-6">
      <div className="mb-16 flex flex-wrap items-center justify-center xl:mb-[18px] xl:justify-between">
        <Image
          src={Logo}
          alt="Barbershop logo"
          className="hidden xl:block xl:h-20 xl:w-20"
        />
        <ul className="flex gap-7 xl:mr-[216px] xl:ml-[320px] xl:gap-12">
          <li>
            <a href="#barbers" className="hover:text-hover active:text-white">
              Майстри
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-hover active:text-white">
              Послуги
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-hover active:text-white">
              Галерея
            </a>
          </li>
          <li>
            <a href="#contacts" className="hover:text-hover active:text-white">
              Контакти
            </a>
          </li>
        </ul>
        <div className="mt-8 flex items-center gap-2 xl:mt-0 xl:gap-4">
          <p className="xl:text-[18px]">SOCIAL</p>
          <div className="bg-main h-px w-20"></div>
          <a
            href="https://www.instagram.com/pride_barbershop_kiyv/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaInstagram className="hover:fill-hover h-7 w-7 active:fill-white" />
          </a>
        </div>
      </div>

      <Image
        src={Logo}
        alt="Barbershop logo"
        className="absolute bottom-4 left-4 mr-auto h-12 w-12 xl:hidden"
      />
      <div className="mx-auto flex items-center gap-2">
        <FaRegCopyright className="h-4 w-4 cursor-default fill-[#5F5A5A]" />
        <p className="text-[10px] xl:text-sm">2025. All Rights Reserved</p>
      </div>
    </footer>
  );
};
