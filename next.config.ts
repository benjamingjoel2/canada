import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  // Pages are statically generated per locale (generateStaticParams + setRequestLocale).
  // Season and currency are applied on the client, so every page can stay static.
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
const withMDX = createMDX({});

export default withNextIntl(withMDX(nextConfig));
