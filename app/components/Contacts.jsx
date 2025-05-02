import { LuClock5, LuPhone, LuMapPin } from 'react-icons/lu';

export const Contacts = () => {
  return (
    <section>
      <div className="px-6 pt-10 pb-12 xl:px-18 xl:pt-20">
        <h2 className="text-center text-[22px]/[30px] italic xl:text-[36px]/[42px]">
          НАШІ КОНТАКТИ
        </h2>
        <ul className="my-6 flex flex-col gap-6 xl:my-[42px]">
          <li className="flex items-start gap-2 xl:gap-4">
            <LuMapPin className="h-[22px] w-5" />
            <div>
              <p className="block">ЖК “НИВКИ-ПАРК”</p>{' '}
              <p className="block">Берестейський проспект 67 а, Київ</p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <LuClock5 className="h-5 w-5" />
            <p>Графік роботи: 10:00 - 20:00 </p>
          </li>
          <li className="flex gap-4">
            <LuPhone className="h-5 w-5 items-center" />
            <p>+380-99-777-40-99</p>
          </li>
        </ul>
        <a
          href="https://n599347.alteg.io/company/566325/personal/menu?o="
          rel="noopener noreferrer nofollow"
          className="border-main xl:text-main hover:border-hover hover:text-hover block w-fit border-[0.5px] border-solid bg-white/1 px-6 py-[10px] inset-shadow-[0px_0px_68px_0px_rgba(221,216,216,0.05)] backdrop-blur-[48px] active:border-white active:text-white xl:px-[50px] xl:py-[17px]"
        >
          Онлайн запис
        </a>
      </div>
      <div></div>
    </section>
  );
};
