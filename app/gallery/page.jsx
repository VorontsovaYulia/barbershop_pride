import Image from 'next/image';
import { galleryItemsMobile, galleryItemsDesktop } from './data';

export default function Gallery() {
  return (
    <div className="px-6 pt-6 pb-4 xl:pt-10 xl:pb-21 xl:px-18">
      <h1 className="text-center italic text-[22px]/[30px] xl:text-[36px]/[42px] mb-6 xl:mb-14">ГАЛЕРЕЯ</h1>

      {/* Mobile */}
      <ul className="flex xl:hidden flex-wrap gap-4 justify-center">
        {galleryItemsMobile.map((item, index) => {
          if (item.type === 'image') {
            return (
              <li key={index}>
                <Image
                  src={item.src}
                  alt={`Фото ${index + 1}`}
                  width={328}
                  height={460}
                  priority
                />
              </li>
            );
          }

          if (item.type === 'text') {
            return (
              <li key={index} className="flex flex-col justify-center py-12 ">
                <h3 className="italic text-[16px] mb-4">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </li>
            );
          }

          return null;
        })}
      </ul>

      {/* Desktop */}
      <ul className="hidden xl:flex flex-wrap gap-8">
        {galleryItemsDesktop.map((item, index) => {
          if (item.type === 'image') {
            return (
              <li key={index}>
                <Image
                  src={item.src}
                  alt={`Фото ${index + 1}`}
                  width={300}
                  height={380}
                  className="object-cover hover:scale-105 duration-500 transition-transform"
                  priority
                />
              </li>
            );
          }

          if (item.type === 'text') {
            return (
              <li key={index} className="flex flex-col justify-center w-[300px] h-[380px]">
                <h3 className="italic text-[16px] mb-4">{item.title}</h3>
                <p className="text-[16px]">{item.description}</p>
              </li>
            );
          }

          return null;
        })}
      </ul>
    </div>
  );
};