'use client';

import { keyNames } from '@/app/lib/navLinks';
import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export const Navigation = ({ onClose }) => {
  const t = useTranslations('Header.navigation');
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <>
      {keyNames.map(keyName => (
        <li key={keyName}>
          <Link
            href={`/${t(`${keyName}.anchor`)}`}
            scroll={true}
            className={`hover-text ${pathname === `/${locale}${t(`${keyName}.anchor`)}` ? 'text-white' : ''}`}
            onClick={onClose}
          >
            {t(`${keyName}.name`)}
          </Link>
        </li>
      ))}
    </>
  );
};
