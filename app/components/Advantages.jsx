import { getTranslations } from 'next-intl/server';
import Image from 'next/image';


export const Advantages = async () => {
  const t = await getTranslations('Advantages');
console.log(t.raw('advantage'));
  return (
    <section className="px-4 pt-12 pb-8 xl:px-18 xl:pt-20 xl:pb-10">
      <h2 className="mb-10 text-center text-[22px]/[30px] uppercase italic xl:mb-16 xl:text-[36px]/[42px]">
       {t('title')}
      </h2>
      <div className="flex items-center justify-center">
        <ul className="flex  max-w-60 flex-col gap-y-10 xl:min-w-212 xl:flex-row xl:justify-between">
          {t.raw('advantage').map((item, idx) => (
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
