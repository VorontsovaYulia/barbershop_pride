import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Archivo_Black, Open_Sans } from 'next/font/google';
// import Head from 'next/head';
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

  // LocalBusiness schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Барбершоп Pride',
    image: 'https://pride-barbershop.com.ua/images/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Берестейський проспект 67а',
      addressLocality: 'Київ',
      postalCode: '03062',
      addressCountry: 'UA',
    },
    telephone: '+380997774099',
    openingHours: 'Mo-Su 10:00-20:00',
    url: 'https://pride-barbershop.com.ua',
    sameAs: ['https://www.instagram.com/pride_barbershop_kiyv/'],
  };

  // Organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Барбершоп Pride',
    url: 'https://pride-barbershop.com.ua',
    logo: 'https://pride-barbershop.com.ua/images/logo.png',
    sameAs: ['https://www.instagram.com/pride_barbershop_kiyv/'],
  };

  // WebSite schema
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Барбершоп Pride',
    url: 'https://pride-barbershop.com.ua',
  };

  // BreadcrumbList schema
  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Головна',
        item: 'https://pride-barbershop.com.ua',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Галерея',
        item: 'https://pride-barbershop.com.ua/gallery',
      },
    ],
  };

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
    icons: {
      icon: '/favicon.ico',
    },
    other: {
      // Correct key for JSON-LD scripts
      'script:ld+json': [
        JSON.stringify(localBusinessSchema),
        JSON.stringify(organizationSchema),
        JSON.stringify(webSiteSchema),
        JSON.stringify(breadcrumbListSchema),
      ],
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      {/* <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="preload"
          as="image"
          href="/images/hero_mob.webp"
          type="image/webp"
        />
      </Head> */}

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
