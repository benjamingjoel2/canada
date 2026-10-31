import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  // Pages are statically generated per locale (generateStaticParams + setRequestLocale).
  // Season and currency are applied on the client, so every page can stay static.
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
  },
  // Retired pages (owner's fix list, October 2026): no team, testimonials or specialist profiles.
  async redirects() {
    return [
      { source: '/:locale(en|fr|de|es)/about/team', destination: '/:locale/about', permanent: true },
      { source: '/:locale(en|fr|de|es)/about/testimonials', destination: '/:locale/about', permanent: true },
      { source: '/:locale(en|fr|de|es)/find-your-specialist', destination: '/:locale/contact', permanent: true },
    ];
  },
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
