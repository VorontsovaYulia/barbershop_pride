import { getTranslations, getLocale } from 'next-intl/server';
import Link from 'next/link';
import { keys } from '@/app/lib/navLinks';

export const Navigation = async ({ onClose }) => {
  const t = await getTranslations('Header.navigation');
  const locale = await getLocale();

  return (
    <>
      {keys.map(key => (
        <li key={key}>
          <Link
            href={`/${locale}/#${t(`${key}.anchor`)}`}
            scroll={true}
            className="hover-text"
            onClick={onClose}
          >
            {t(`${key}.name`)}
          </Link>
        </li>
      ))}
    </>
  );
};
