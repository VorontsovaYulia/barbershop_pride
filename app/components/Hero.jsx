import { IoLogoInstagram } from 'react-icons/io5';

export const Hero = () => {
  return (
    <section className="relative mt-[-80px] max-h-[790px] max-w-[375px] bg-[url('/images/hero_mob.webp')] bg-cover bg-center pt-[80px] pb-[168px] xl:mt-[-104px] xl:max-h-[920px] xl:max-w-[1440px] xl:bg-[url('/images/hero.webp')] xl:pt-[104px] xl:pb-[142px]">
      <div className="absolute top-[464px] right-[72px] inline-flex origin-top-right rotate-90 items-center justify-end gap-4 max-xl:hidden">
        <span className="text-[18px]/[26px]">SOCIAL</span>
        <div className="w-[200px] border-b"></div>
        <a
          href="https://www.instagram.com/pride_barbershop_kiyv/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <IoLogoInstagram className="hover:fill-hover h-6 w-6 active:fill-white" />
        </a>
      </div>
      <h1 className="font-archivo-black mx-auto mt-60 max-w-[750px] text-center text-[38px]/[46px] xl:mt-[174px] xl:text-[96px]/[124px]">
        PRIDE BARBERSHOP
      </h1>
      <p className="mt-8 text-center text-[22px]/[30px] xl:mt-6 xl:text-[36px]/[44px]">
        Обирай найкращих
      </p>
      <a
        href="https://n599347.alteg.io/company/566325/personal/menu?o="
        rel="noopener noreferrer nofollow"
        className="border-main xl:text-main hover:border-hover hover:text-hover mx-auto mt-[96px] block w-fit border-[0.5px] border-solid bg-white/1 px-10 py-3.5 text-black shadow-[inset_0px_0px_68px_0px_rgba(221,216,216,0.05)] backdrop-blur-[48px] active:border-white active:text-white xl:mt-[120px] xl:px-12.5 xl:py-4"
      >
        Онлайн запис
      </a>
    </section>
  );
};
