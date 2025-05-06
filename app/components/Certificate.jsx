import { getTranslations } from 'next-intl/server';

export const Certificate = async () => {
  const t = await getTranslations('CertificateSection');
  return (
    <section className="h-[460px] max-w-[375px] bg-[url('/images/certificate_mob.webp')] bg-cover bg-center xl:h-[753px] xl:max-w-[1440px] xl:bg-[url('/images/certificate.webp')]">
      <div className="flex h-full flex-col justify-between py-10 pr-10 pl-6 text-[22px] italic xl:pt-26 xl:pr-30 xl:pb-30 xl:pl-26 xl:text-4xl">
        <div className="max-w-[182px] uppercase xl:max-w-[296px]">
          <p> {t('title')}</p>
          <span className="font-archivo-black xl:text- text-[38px] leading-[1.16] not-italic xl:text-[80px] xl:leading-[1.1]">
            PRIDE
          </span>
        </div>
        <div className="flex justify-end align-text-bottom uppercase italic">
          {t('cta')}
        </div>
      </div>
    </section>
  );
};
