import { useTranslations } from 'next-intl';
import { Italic } from '@/components/ui/Italic';
import { ButtonLink } from '@/components/ui/Button';

export default function NotFound() {
  const t = useTranslations('notFound');
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-start justify-center py-24">
      <h1 className="text-5xl text-forest md:text-7xl">
        <Italic text={t('title')} />
      </h1>
      <p className="mt-6 max-w-lg text-lg text-granite">{t('body')}</p>
      <ButtonLink href="/" className="mt-10">
        {t('home')}
      </ButtonLink>
    </section>
  );
}
