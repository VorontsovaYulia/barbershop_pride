import { Open_Sans, Archivo_Black } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/ui/Navigation';

export const openSans = Open_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const archivoBlack = Archivo_Black({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-archivo-black',
  display: 'swap',
});

export const metadata = {
  title: 'Барбершоп Pride | Барбершоп Нивки',
  description:
    'Чоловіча перукарня у Києві на Нивках. Барбершоп Pride пропонує стильні стрижки, гоління небезпечною бритвою та догляд за бородою. Ми поряд із метро Нивки. ЖК Нивки Парк',
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body
        className={`${openSans.variable} ${archivoBlack.variable} text-main font-openSans bg-black text-sm font-normal antialiased xl:text-xl`}
      >
        <div className="mx-auto max-w-[375px] xl:max-w-[1440px]">
          <NextIntlClientProvider messages={messages}>
            <Header>
              <Navigation />
            </Header>
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
