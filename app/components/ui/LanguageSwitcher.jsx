'use client';

import * as Select from '@radix-ui/react-select';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

export const LanguageSwitcher = () => {
  const t = useTranslations('Header');

  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const changeLocale = newLocale => {
    if (newLocale === currentLocale) return;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <Select.Root defaultValue={currentLocale} onValueChange={changeLocale}>
      <Select.Trigger
        className="hover-text inline-flex items-center gap-1 bg-transparent text-xl"
        aria-label={t('choose')}
      >
        <Select.Value />
        <Select.Icon />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          side="bottom"
          align="end"
          sideOffset={2}
          className="bg-main text-xl text-black"
        >
          <Select.Viewport>
            <Select.Item
              value="en"
              className="hover-bg cursor-pointer px-3 outline-none"
            >
              <Select.ItemText>EN</Select.ItemText>
            </Select.Item>
            <Select.Item
              value="uk"
              className="hover-bg cursor-pointer px-3 outline-none"
            >
              <Select.ItemText>UA</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
