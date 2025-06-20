import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Archivo_Black, Open_Sans } from 'next/font/google';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navigation } from '../components/ui/Navigation';
import '../globals.css';

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

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://pride-barbershop.com.ua/${locale}`,
      languages: {
        uk: 'https://pride-barbershop.com.ua/uk',
        en: 'https://pride-barbershop.com.ua/en',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} prefix="og: http://ogp.me/ns#">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta property="og:title" content="Барбершоп Pride – стильні чоловічі стрижки. Київ, Нивки" />
        <meta property="og:description" content="Барбершоп Pride ✂️ Барбершоп на Нивках ▶️ Запишись онлайн ☎️ +380997774099 ✅ Чекаємо саме на тебе!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pride-barbershop.com.ua" />
        <meta property="og:site_name" content="Барбершоп Pride – стильні чоловічі стрижки. Київ, Нивки" />
        <meta property="og:image" content="/images/socialVersion.jpg" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:locale" content={locale} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Барбершоп Pride – стильні чоловічі стрижки. Київ, Нивки" />
        <meta name="twitter:description" content="Барбершоп Pride ✂️ Барбершоп на Нивках ▶️ Запишись онлайн ☎️ +380997774099 ✅ Чекаємо саме на тебе!" />
        <meta name="twitter:image" content="/images/socialVersion.jpg" />
        <meta name="twitter:site" content="@pridebarbershop" />
        <meta name="twitter:creator" content="@pridebarbershop" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Барбершоп Pride',
              url: `https://pride-barbershop.com.ua/${locale}`,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Барбершоп Pride',
              url: `https://pride-barbershop.com.ua/${locale}`,
              logo: 'https://pride-barbershop.com.ua/images/logo.png',
              sameAs: 'https://www.instagram.com/pride_barbershop_kiyv/',
              telephone: '+380997774099',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: locale === 'uk' ? 'Головна' : 'Home',
                  item: `https://pride-barbershop.com.ua/${locale}`,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: locale === 'uk' ? 'Галерея' : 'Gallery',
                  item: `https://pride-barbershop.com.ua/${locale}/gallery`,
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Барбершоп Pride',
              image: 'https://pride-barbershop.com.ua/images/logo.png',
              url: `https://pride-barbershop.com.ua/${locale}`,
              telephone: '+380997774099',
              openingHours: 'Mo-Su 10:00-20:00',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Берестейський проспект 67а',
                addressLocality: 'Київ',
                postalCode: '03062',
                addressCountry: 'UA',
              },
            }),
          }}
        />
      </head>
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
