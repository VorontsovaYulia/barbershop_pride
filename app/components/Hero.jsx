import { getTranslations } from 'next-intl/server';
import { IoLogoInstagram } from 'react-icons/io5';
import Image from 'next/image';

export const Hero = async () => {
  const t = await getTranslations('HeroSection');
  return (
    <section className="relative mt-[-80px] max-h-[790px] max-w-[375px] pt-[80px] pb-[168px] xl:mt-[-104px] xl:max-h-[920px] xl:max-w-[1440px] xl:pt-[104px] xl:pb-[142px]">
      <Image
        src="/images/hero_mob.webp"
        alt="Hero Background"
        fill
        priority
        className="block object-cover xl:hidden"
        sizes="(max-width: 1440px) 100vw"
      />
      <Image
        src="/images/hero.webp"
        alt="Hero Background"
        fill
        className="hidden object-cover xl:block"
        sizes="(min-width: 1440px) 100vw"
      />
      <div className="absolute top-[464px] right-[72px] inline-flex origin-top-right rotate-90 items-center justify-end gap-4 max-xl:hidden">
        <span className="text-[18px]/[26px]">SOCIAL</span>
        <div className="w-[200px] border-b"></div>
        <a
          href="https://www.instagram.com/pride_barbershop_kiyv/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="group"
          aria-label="instagram"
        >
          <IoLogoInstagram className="group-hover-fill h-6 w-6" />
        </a>
      </div>
      <h1 className="font-archivo-black relative z-10 mx-auto mt-60 max-w-[750px] text-center text-[38px]/[46px] xl:mt-[174px] xl:text-[96px]/[124px]">
        PRIDE BARBERSHOP
      </h1>
      <p className="relative z-10 mt-8 text-center text-[22px]/[30px] xl:mt-6 xl:text-[36px]/[44px]">
        {t('motto')}
      </p>
      <a
        href="https://n599347.alteg.io/company/566325/personal/menu?o="
        rel="noopener noreferrer nofollow"
        className="border-main xl:text-main hover-border hover-text mx-auto mt-[96px] block w-fit border-[0.5px] border-solid bg-white/1 px-10 py-3.5 text-black shadow-[inset_0px_0px_68px_0px_rgba(221,216,216,0.05)] backdrop-blur-[48px] xl:mt-[120px] xl:px-12.5 xl:py-4"
      >
        {t('cta')}
      </a>
    </section>
  );
};
