import { getTranslations } from "next-intl/server";

export const Prices = async () => {
  const t = await getTranslations('ServicesAndPrices');
  return (
    <section
      id="services"
      className="bg-[url(/images/prices-background-mob.webp)] bg-cover bg-center bg-no-repeat px-4 py-4 xl:bg-[url(/images/prices-background-desk.webp)] xl:px-18 xl:py-16"
    >
      <div className="rounded-[10px] bg-[linear-gradient(90.00deg,rgba(192,188,188,0.1)0%,rgba(252,246,246,0.1)53.251%,rgba(153,153,153,0.1)100%)] shadow-[inset_0_0_68px_0_rgba(221,216,216,0.05)] backdrop-blur-[12px] xl:h-185">
        <h2 className="mb-4 pt-4 text-center text-[22px]/[30px] text-white uppercase italic xl:mb-10 xl:px-18 xl:pt-12 xl:text-start xl:text-[36px]/[42px]">
          {t('title')}
        </h2>
        <ul className="flex flex-col justify-center gap-y-2 px-4 pb-9 text-[14px]/[20px] text-white xl:h-130 xl:flex-wrap xl:gap-x-28 xl:gap-y-6 xl:px-18 xl:pb-0 xl:text-[20px]/[26px]">
          {t.raw('servicesAndPrices').map((item, idx) => (
            <li
              key={idx}
              className="flex flex-row justify-between border-b-[0.5px] pb-1 xl:w-130 xl:pb-2"
            >
              <p>{item.service}</p>
              <p>
                {item.price}
                <span className="pl-1 xl:pl-2"> {t('currency')}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
