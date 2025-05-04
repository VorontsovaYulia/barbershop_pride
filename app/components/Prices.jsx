const servicesAndPrices = [
  {
    service: 'Стрижка',
    price: '700',
  },
  {
    service: 'Борода',
    price: '500 ',
  },
  {
    service: 'Комбо (стрижка + борода)',
    price: '  1100',
  },
  {
    service: 'Стрижка машинкою',
    price: '500',
  },
  {
    service: 'Дитяча стрижка',
    price: '650',
  },
  {
    service: 'Подовжена стрижка (довга)',
    price: '850',
  },
  {
    service: 'Подовжена стрижка (середня) ',
    price: '800',
  },
  {
    service: 'Камуфляж сивини (голова)',
    price: '  650',
  },
  {
    service: 'Камуфляж сивини (борода)',
    price: '600',
  },
  {
    service: 'Укладка',
    price: '200',
  },
  {
    service: 'Вуса',
    price: '200',
  },
  {
    service: 'Ідеальні брови',
    price: '250',
  },
  {
    service: 'Воскова депіляція',
    price: '200',
  },
  {
    service: 'Королівське гоління голови',
    price: ' 650',
  },
  {
    service: 'Королівське гоління бороди  ',
    price: ' 600',
  },
  {
    service: 'Пілінг шкіри голови',
    price: '400',
  },
  {
    service: 'Розслабляючий масаж голови',
    price: '250',
  },
  {
    service: 'Королівський догляд за обличчям',
    price: '600',
  },
];
export const Prices = () => {
  return (
    <section className="bg-[url(/images/prices-background-mob.webp)] bg-cover bg-center bg-no-repeat px-4 py-4 xl:bg-[url(/images/prices-background-desk.webp)] xl:px-18 xl:py-16">
      <div className="rounded-[10px] bg-[linear-gradient(90.00deg,rgba(192,188,188,0.1)0%,rgba(252,246,246,0.1)53.251%,rgba(153,153,153,0.1)100%)] shadow-[inset_0_0_68px_0_rgba(221,216,216,0.05)] backdrop-blur-[12px]">
        <h2 className="mb-3 pt-4 text-center text-[22px]/[30px] text-white uppercase italic xl:mb-10 xl:px-18 xl:text-start xl:text-[36px]/[42px]">
          Послуги
        </h2>
        <ul className="flex flex-col justify-center gap-y-2 px-4 pb-3 text-[14px]/[20px] text-white xl:px-18">
          {servicesAndPrices.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-row justify-between border-b-[0.5px] pb-1"
            >
              <p>{item.service}</p>
              <p>
                {item.price}
                <span>грн</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
