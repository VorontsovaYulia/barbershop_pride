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
    <section className="bg-[url(/images/prices-background-mob.webp)] bg-cover bg-center bg-no-repeat px-4 py-4 xl:px-18 xl:pt-20 xl:pb-10">
      <div class="rounded-[10px] backdrop-blur-lg backdrop-grayscale-50">
        <h2 className="mb-4 pt-4 text-center text-[22px]/[30px] text-white uppercase italic xl:mb-16 xl:text-[36px]/[42px]">
          Послуги
        </h2>
        <ul className="flex flex-col gap-y-2 justify-center px-4 text-white text-[14px]/[20px]">
          {servicesAndPrices.map((item, idx) => (
            <li key={idx} className="flex flex-row justify-between border-b pb-1">
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
