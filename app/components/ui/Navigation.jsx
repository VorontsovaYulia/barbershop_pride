import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { keys } from '@/app/lib/navLinks';

export const Navigation = async ({ onClose }) => {
  const t = await getTranslations('Header.navigation');

  return (
    <>
      {keys.map(key => (
        <Link
          key={key}
          href={t(`${key}.link`)}
          scroll={true}
          className="hover-text"
          onClick={onClose}
        >
          {t(`${key}.name`)}
        </Link>
      ))}
    </>
  );
};
