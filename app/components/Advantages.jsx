import Image from 'next/image';

const advantagesItems = [
  {
    icon: 'icons/advantages-1.svg',
    text: 'Кожна стрижка - діалог',
    description: 'Картинка ножиці',
  },
  {
    icon: 'icons/advantages-2.svg',
    text: 'Кожна зустріч - ритуал',
    description: 'Картинка леза',
  },
  {
    icon: 'icons/advantages-3.svg',
    text: 'Кожен клієнт - історія',
    description: 'Картинка чоловік',
  },
];

export const Advantages = () => {
  return (
    <section className="px-4 pt-12 pb-8 xl:px-18 xl:pt-20 xl:pb-10">
      <h2 className="mb-10 text-center text-[22px]/[30px] uppercase italic xl:mb-16 xl:text-[36px]/[42px]">
        Чому обирають нас
      </h2>
      <div className="flex items-center justify-center">
        <ul className="flex w-40 flex-col gap-y-10 xl:w-210 xl:flex-row xl:gap-x-22">
          {advantagesItems.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col items-center gap-y-4 xl:gap-y-6"
            >
              <Image
                className="xl:h-20 xl:w-22"
                src={item.icon}
                alt={item.description}
                unoptimized={true}
                height={60}
                width={66}
              />
              <p> {item.text} </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
