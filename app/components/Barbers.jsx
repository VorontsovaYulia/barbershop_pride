import Image from 'next/image';
import Link from 'next/link';

const barbers = [
  {
    image_mob: '/images/barbers-Bohdan-mob.jpg',
    image_desk: '/images/barbers-Bohdan-desk.jpg',
    name: 'Богдан',
    image_hover: '/images/barbers-Bohdan-desk-hover.jpg',
    text_hover: 'Від класики до трендів',
    description_for_img: 'Фото майстра Богдана',
    icon: 'icons/barbers-altegio.svg',
  },
  {
    image_mob: '/images/barbers-Kate-mob.jpg',
    image_desk: '/images/barbers-Kate-desk.jpg',
    name: 'Катерина',
    image_hover: '/images/barbers-Kate-desk-hover.jpg',
    text_hover: 'Твій новий стиль уже в її голові',
    description_for_img: 'Фото майстра Катерини',
    icon: 'icons/barbers-altegio.svg',
  },
  {
    image_mob: '/images/barbers-Dima-mob.jpg',
    image_desk: '/images/barbers-Dima-desk.jpg',
    name: 'Дмитро',
    image_hover: '/images/barbers-Dima--desk-hover.jpg',
    text_hover: 'Точність у кожному русі',
    description_for_img: 'Фото майстра Дмитра',
    icon: 'icons/barbers-altegio.svg',
  },
];

export const Barbers = () => {
  return (
    <section className="px-4 pt-10 pb-10 xl:px-18 xl:pt-12 xl:pb-28">
      <h2 className="mb-10 text-center text-[22px]/[30px] uppercase italic xl:mb-16 xl:text-[36px]/[42px]">
        Наші майстри
      </h2>
      <div className="flex items-center justify-end pr-2 pl-6">
        <ul className="flex flex-col gap-y-6 xl:w-300 xl:flex-row xl:gap-x-16">
          {barbers.map((item, idx) => (
            <li
              key={idx}
              className="relative flex w-78 flex-col items-end gap-y-11"
            >
              <span className="mr-4 h-78 w-60 border-1"></span>
              <Image
                src={item.image_mob}
                width={264}
                height={324}
                className="absolute top-6 right-12 block xl:hidden"
                alt={item.description_for_img}
              />
              <Image
                src={item.image_desk}
                width={1000}
                height={760}
                className="hidden xl:block"
                alt={item.description_for_img}
              />

              <div className="h-10 flex flex-row items-center gap-x-2">
                <p className="text-[16px]/[20px] text-white uppercase italic">
                  {item.name}
                </p>
                <Link href="/">
                  <Image
                    className="h-20 xl:w-22"
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
