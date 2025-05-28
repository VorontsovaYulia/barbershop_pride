import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { galleryItemsDesktop, galleryItemsMobile } from '../../lib/gallery';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('galleryTitle'),
    description: t('galleryDescription'),
    alternates: {
      canonical: `https://pride-barbershop.com.ua/${locale}/gallery`,
      languages: {
        uk: 'https://pride-barbershop.com.ua/uk/gallery',
        en: 'https://pride-barbershop.com.ua/en/gallery',
      },
    },
  };
}
export default async function Gallery() {
  const t = await getTranslations('GalleryPage');

  return (
    <div className="px-6 pt-6 pb-4 xl:px-18 xl:pt-10 xl:pb-21">
      <h1 className="mb-6 text-center text-[22px]/[30px] uppercase italic xl:mb-14 xl:text-[36px]/[42px]">
        {t('gallery')}
      </h1>

      {/* Mobile */}
      <ul className="flex flex-wrap justify-center gap-4 xl:hidden">
        {galleryItemsMobile.map((item, index) => {
          if (item.type === 'image') {
            return (
              <li key={index}>
                <Image
                  src={item.src}
                  alt={`${t('alt')} ${index + 1}`}
                  width={328}
                  height={460}
                  priority
                />
              </li>
            );
          }

          if (item.type === 'text') {
            return (
              <li key={index} className="flex flex-col justify-center py-12">
                <h2 className="mb-4 text-[16px] uppercase italic">
                  {t(item.titleKey)}
                </h2>
                <p className="text-sm">{t(item.descriptionKey)}</p>
              </li>
            );
          }

          return null;
        })}
      </ul>

      {/* Desktop */}
      <ul className="hidden flex-wrap gap-8 xl:flex">
        {galleryItemsDesktop.map((item, index) => {
          if (item.type === 'image') {
            return (
              <li key={index}>
                <Image
                  src={item.src}
                  alt={`${t('alt')} ${index + 1}`}
                  width={300}
                  height={380}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </li>
            );
          }

          if (item.type === 'text') {
            return (
              <li
                key={index}
                className="flex h-[380px] w-[300px] flex-col justify-center"
              >
                <h2 className="mb-4 text-[16px] uppercase italic">
                  {t(item.titleKey)}
                </h2>
                <p className="text-[16px]">{t(item.descriptionKey)}</p>
              </li>
            );
          }

          return null;
        })}
      </ul>
    </div>
  );
}
