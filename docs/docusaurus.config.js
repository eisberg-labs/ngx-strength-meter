// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ngx Strength Meter',
  tagline: 'Angular widget for password strength estimation using zxcvbn',
  url: 'https://ngx-strength-meter.amarjanica.com',
  baseUrl: '/',
  projectName: 'ngx-strength-meter', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: (process.env.ANALYTICS_ID) ? {
          trackingID: process.env.ANALYTICS_ID,
          anonymizeIP: true,
        }: undefined,
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          /* other docs plugin options */
        },
        blog: false, // Optional: disable the blog plugin
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'Ngx Strength Meter',
        items: [
          {
            href: 'https://www.amarjanica.com/blog', label: 'Blog', position: 'left'
          },
          {
            href: 'https://github.com/eisberg-labs/ngx-strength-meter',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Eisberg Labs d.o.o.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
