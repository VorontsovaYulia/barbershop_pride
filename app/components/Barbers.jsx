import Image from 'next/image';
import Link from 'next/link';

const barbers = [
  {
    image_mob: '/images/barbers-Bohdan-mob.jpg',
    image_desk: '/images/barbers-Bohdan-desk.jpg',
    name: 'Богдан',
    image_hover_mob: '/images/barbers-Bohdan-mob-hover.jpg',
    image_hover_desk: '/images/barbers-Bohdan-desk-hover.jpg',
    text_hover: 'Від класики до трендів',
    description_for_img: 'Фото майстра Богдана',
    icon: 'icons/barbers-altegio.svg',
    link: '',
  },
  {
    image_mob: '/images/barbers-Kate-mob.jpg',
    image_desk: '/images/barbers-Kate-desk.jpg',
    name: 'Катерина',
    image_hover_mob: '/images/barbers-Kate-mob-hover.jpg',
    image_hover_desk: '/images/barbers-Kate-desk-hover.jpg',
    text_hover: 'Твій новий стиль уже в її голові',
    description_for_img: 'Фото майстра Катерини',
    icon: 'icons/barbers-altegio.svg',
    link: '',
  },
  {
    image_mob: '/images/barbers-Dima-mob.jpg',
    image_desk: '/images/barbers-Dima-desk.jpg',
    name: 'Дмитро',
    image_hover_mob: '/images/barbers-Dima-mob-hover.jpg',
    image_hover_desk: '/images/barbers-Dima-desk-hover.jpg',
    text_hover: 'Точність у кожному русі',
    description_for_img: 'Фото майстра Дмитра',
    icon: 'icons/barbers-altegio.svg',
    link: '',
  },
  {
    image_mob: '/images/barbers-Darina-mob.jpg',
    image_desk: '/images/barbers-Darina-desk.jpg',
    name: 'Дарина',
    image_hover_mob: '/images/barbers-Darina-mob-hover.jpg',
    image_hover_desk: '/images/barbers-Darina-desk-hover.jpg',
    text_hover: '?????????????????????',
    description_for_img: 'Фото майстра Дарини',
    icon: 'icons/barbers-altegio.svg',
    link: '',
  },
];

export const Barbers = () => {
  return (
    <section className="px-4 pt-10 pb-10 xl:px-18 xl:pt-12 xl:pb-28">
      <h2 className="mb-10 text-center text-[22px]/[30px] uppercase italic xl:mb-16 xl:text-[36px]/[42px]">
        Наші майстри
      </h2>
      <div className="flex items-center justify-end pr-2 pl-6 xl:justify-center xl:xl:pr-0 xl:pl-0">
        <ul className="flex flex-col gap-y-6 xl:w-228 xl:flex-row xl:flex-wrap xl:justify-center xl:gap-x-44 xl:gap-y-12">
          {barbers.map((item, idx) => (
            <li
              key={idx}
              className="group relative flex w-78 flex-col items-end gap-y-1 xl:w-92 xl:gap-y-4"
            >
              <Link
                href="/"
                className="group pointer-events-none flex h-88 w-78 justify-end xl:h-108 xl:w-92"
              >
                {/* Рамка */}
                <span className="mr-4 h-78 w-60 border-1 xl:mr-1 xl:h-95 xl:w-73"></span>
                {/* Світлий бекдроп */}
                <div className="xl: absolute top-6 right-12 z-20 h-81 w-66 bg-[#EACCB6]/10 transition-opacity duration-500 ease-in-out group-hover:opacity-0 group-focus:opacity-0 xl:top-8 xl:right-10 xl:h-100 xl:w-80"></div>
                {/* Темний бекдроп */}
                <div className="xl: absolute top-6 right-12 z-20 h-81 w-66 bg-[#000000]/30 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-focus:opacity-100 xl:top-8 xl:right-10 xl:h-100 xl:w-80">
                  <p className="k absolute top-4 z-40 w-66 text-center text-[14px]/[22px] font-normal text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-focus:opacity-100 xl:w-80 xl:text-[16px]/[22px]">
                    {item.text_hover}
                  </p>
                </div>

                {/* Mobile */}
                <Image
                  src={item.image_mob}
                  width={264}
                  height={324}
                  className="absolute top-6 right-12 block group-hover:hidden group-focus:hidden xl:hidden"
                  alt={item.description_for_img}
                />
                <Image
                  src={item.image_hover_mob}
                  width={264}
                  height={324}
                  className="absolute top-6 right-12 hidden group-hover:block group-focus:block xl:hidden xl:group-hover:hidden xl:group-focus:hidden"
                  alt={item.description_for_img}
                />

                {/* Desktop */}
                <Image
                  src={item.image_desk}
                  width={320}
                  height={400}
                  className="hidden xl:absolute xl:top-8 xl:right-10 xl:block xl:group-hover:hidden xl:group-focus:hidden"
                  alt={item.description_for_img}
                />
                <Image
                  src={item.image_hover_desk}
                  width={320}
                  height={400}
                  className="hidden xl:absolute xl:top-8 xl:right-10 xl:group-hover:block xl:group-focus:block"
                  alt={item.description_for_img}
                />
              </Link>
              <div className="flex h-10 flex-row items-center gap-x-2 xl:gap-x-4">
                <p className="text-[16px]/[20px] text-white uppercase italic">
                  {item.name}
                </p>
                <Link href="/">
                  <Image
                    className="xl:h-12 xl:w-12"
                    src={item.icon}
                    alt="Аltegio"
                    unoptimized={true}
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
