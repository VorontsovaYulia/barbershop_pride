import { IoLogoInstagram } from 'react-icons/io5';

export const Hero = () => {
  return (
    <section className="relative mt-[-80px] max-h-[790px] max-w-[375px] bg-[url('/images/hero_mob.jpg')] bg-cover bg-center pt-[80px] pb-[168px] xl:mt-[-104px] xl:max-h-[920px] xl:max-w-[1440px] xl:bg-[url('/images/hero.jpg')] xl:pt-[104px] xl:pb-[142px]">
      <div className="absolute top-[464px] right-[72px] inline-flex origin-top-right rotate-90 items-center justify-end gap-4 max-xl:hidden">
        <span className="text-[18px]/[26px]">SOCIAL</span>
        <div className="w-[200px] border-b"></div>
        <a href="https://www.instagram.com/pride_barbershop_kiyv/">
          <IoLogoInstagram className="hover:fill-hover h-6 w-6 active:fill-white" />
        </a>
      </div>
      <h1 className="font-archivo-black mx-auto mt-60 max-w-[750px] text-center text-[38px]/[48px] xl:mt-[174px] xl:text-[96px]/[126px]">
        PRIDE BARBERSHOP
      </h1>
      <p className="mt-8 text-center text-[22px]/[30px] xl:mt-6 xl:text-[36px]/[44px]">
        Обирай найкращих
      </p>
      <button className="mx-auto mt-[96px] block h-[48px] w-[180px] border bg-white xl:mt-[120px] xl:h-[60px] xl:w-[240px]">
        click
      </button>
    </section>
  );
};
