import { getTranslations } from 'next-intl/server';
import { LuClock5, LuPhone, LuMapPin } from 'react-icons/lu';

export const Contacts = async () => {
  const t = await getTranslations('ContactsSection');
  return (
    <section id="contacts" className="xl:flex">
      <div className="px-6 pt-10 pb-12 xl:px-18 xl:pt-20">
        <h3 className="text-center text-[22px]/[30px] uppercase italic xl:text-start xl:text-[36px]/[42px]">
          {t('title')}
        </h3>
        <ul className="my-6 flex flex-col gap-6 xl:my-[42px]">
          <li className="flex items-start gap-2 xl:gap-4">
            <LuMapPin className="h-5 w-5 cursor-default xl:h-7 xl:w-7" />

            <div>
              <address className="block not-italic">{t('RCaddress')}</address>{' '}
              <address className="block not-italic">{t('address')}</address>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <LuClock5 className="h-5 w-5 cursor-default xl:h-7 xl:w-7" />
            <p>{t('time')}</p>
          </li>
          <li className="flex items-center gap-4">
            <LuPhone className="h-5 w-5 cursor-default items-center xl:h-7 xl:w-7" />
            <a
              href="tel:+380997774099"
              className="hover:text-hover active:text-white"
            >
              +380-99-777-40-99
            </a>
          </li>
        </ul>
        <a
          href="https://n599347.alteg.io/company/566325/personal/menu?o="
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="border-main xl:text-main hover:border-hover hover:text-hover block w-fit border-[0.5px] border-solid bg-white/1 px-6 py-[10px] inset-shadow-[0px_0px_68px_0px_rgba(221,216,216,0.05)] backdrop-blur-[48px] active:border-white active:text-white xl:px-[50px] xl:py-[17px]"
        >
          {t('button')}
        </a>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.183012554283!2d30.404716281909142!3d50.4563166301549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc435202de1d%3A0x935de67949eab8ad!2z0JHQtdGA0LXRgdGC0LXQudGB0YzQutC40Lkg0L_RgNC-0YHQv9C10LrRgiwgNjfQsCwg0JrQuNGX0LIsIDAzMDYy!5e0!3m2!1suk!2sua!4v1746210998099!5m2!1suk!2sua"
          className="h-[476px] w-[375px] border-0 xl:w-[912px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t('mapTitle')}
        ></iframe>
      </div>
    </section>
  );
};
