import Image from 'next/image';
import Logo from '@images/logo.png';
import { SlMenu } from 'react-icons/sl';
import { TbTriangleInvertedFilled } from 'react-icons/tb';

const navLinks = {
  Майстри: './#barbers',
  Послуги: './#services',
  Галерея: './#gallery',
  Контакти: './#contacts',
};

export const Header = () => {
  return (
    <header className="relative z-10 flex items-center justify-between px-4 pt-8 xl:px-18 xl:pt-6">
      <Image
        src={Logo}
        alt="Barbershop logo"
        className="h-12 w-12 xl:h-20 xl:w-20"
      />
      <div className="flex gap-12 max-xl:hidden">
        {Object.keys(navLinks).map(name => (
          <a
            key={name}
            href={navLinks[name]}
            className="hover:text-hover active:text-white"
          >
            {name}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-1 max-xl:hidden">
        <div className="">UA</div>
        <TbTriangleInvertedFilled className="hover:text-hover h-4 w-4 active:fill-white" />
      </div>

      <button type="button" className="xl:hidden">
        <SlMenu className="h-8 w-8 active:fill-white" />
      </button>
    </header>
  );
};
