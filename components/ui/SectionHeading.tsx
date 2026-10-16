import clsx from 'clsx';
import { Italic } from './Italic';

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  as: Tag = 'h2',
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx(align === 'center' && 'mx-auto text-center', 'max-w-3xl', className)}>
      {eyebrow && <p className={clsx('eyebrow mb-4', light ? 'text-lake-200' : 'text-lake-700')}>{eyebrow}</p>}
      <Tag className={clsx(Tag === 'h1' ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl', light ? 'text-birch' : 'text-forest')}>
        <Italic text={title} />
      </Tag>
      {intro && <p className={clsx('mt-5 text-base leading-relaxed md:text-lg', light ? 'text-birch/80' : 'text-granite')}>{intro}</p>}
    </div>
  );
}
