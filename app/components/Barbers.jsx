import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export const Barbers = async () => {
  const t = await getTranslations('Barbers');
  return (
    <section
      id="barbers"
      className="px-4 pt-10 pb-10 xl:px-18 xl:pt-12 xl:pb-28"
    >
      <h3 className="mb-10 text-center text-[22px]/[30px] uppercase italic xl:mb-16 xl:text-[36px]/[42px]">
        {t('title')}
      </h3>
      <div className="flex items-center justify-end pr-2 pl-6 xl:justify-center xl:xl:pr-0 xl:pl-0">
        <ul className="flex flex-col gap-y-6 xl:w-228 xl:flex-row xl:flex-wrap xl:justify-center xl:gap-x-44 xl:gap-y-12">
          {t.raw('barbers').map((item, idx) => (
            <li
              tabIndex="0"
              key={idx}
              className="group relative flex w-78 flex-col items-end gap-y-1 xl:w-92 xl:gap-y-4 xl:nth-last-2:order-last"
            >
              <Link
                href={item.link}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={item.aria_label}
                className="group pointer-events-none flex h-88 w-78 justify-end xl:pointer-events-auto xl:h-108 xl:w-92"
              >
                {/* Рамка */}
                <span className="mr-4 h-78 w-60 border-1 xl:mr-2 xl:h-95 xl:w-73"></span>
                {/* Світлий бекдроп */}
                <div className="xl: absolute top-6 right-12 z-200 h-81 w-66 bg-[#EACCB6]/10 transition-opacity duration-500 ease-in-out group-hover:opacity-0 group-focus:opacity-0 xl:top-8 xl:right-10 xl:h-100 xl:w-80"></div>
                {/* Темний бекдроп */}
                <div className="xl: absolute top-6 right-12 z-200 h-81 w-66 bg-[#000000]/30 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-focus:opacity-100 xl:top-8 xl:right-10 xl:h-100 xl:w-80">
                  <p className="k absolute top-4 z-300 w-66 text-center text-[14px]/[22px] font-normal text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-focus:opacity-100 xl:w-80 xl:text-[16px]/[22px]">
                    {item.text_hover}
                  </p>
                </div>

                {/* Mobile */}
                <Image
                  src={item.image_mob}
                  width={264}
                  height={324}
                  className="absolute top-6 right-12 block xl:hidden"
                  alt={item.description_for_img}
                />
                <Image
                  src={item.image_hover_mob}
                  width={264}
                  height={324}
                  className="absolute top-6 right-12 z-100 hidden group-focus:block xl:hidden xl:group-focus:hidden"
                  alt={item.description_for_img}
                />

                {/* Desktop */}
                <Image
                  src={item.image_desk}
                  width={320}
                  height={400}
                  className="hidden xl:absolute xl:top-8 xl:right-10 xl:block"
                  alt={item.description_for_img}
                />
                <Image
                  src={item.image_hover_desk}
                  width={320}
                  height={400}
                  className="hidden xl:absolute xl:top-8 xl:right-10 xl:z-100 xl:group-hover:block xl:group-focus:block"
                  alt={item.description_for_img}
                />
              </Link>
              <div className="flex h-10 flex-row items-center gap-x-2 xl:gap-x-4">
                <p className="text-[16px]/[20px] text-white uppercase italic">
                  {item.name}
                </p>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={item.aria_label}
                >
                  <Image
                    className="xl:h-12 xl:w-12"
                    src={item.icon}
                    alt="Altegio"
                    unoptimized
                    height={40}
                    width={40}
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
