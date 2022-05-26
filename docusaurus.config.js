// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Skilltrack',
  tagline: 'build your skill experience',
  url: 'https://skilltrack.ai',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: '/img/favicon.png',
  organizationName: 'skilltrack-ai',
  projectName: 'documentation',
  staticDirectories:["static", "public"],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath }) => `https://github.com/skilltrack-ai/documentation/edit/main/docs/${docPath}`,
          docItemComponent: require.resolve('./src/components/CustomDocItem/index.tsx'),
          exclude: ['**/*.wip'],
          breadcrumbs: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      autoCollapseSidebarCategories: true,
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rest', 'http', 'haskell', 'plsql', 'docker', 'nginx', 'markdown'],
      },
      navbar: {
        hideOnScroll: false,
        title: '',
        logo: {
          alt: 'Skilltrack Logo',
          src: '/img/logo.png',
          href: '/'
        },
        items: [
          {
            type: 'dropdown',
            label: 'Docs',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'core/index',
                label: 'Core',
              },
            ],
          },
          {
            to: 'https://blog.skilltrack.ai/',
            label: 'Blog',
            position: 'left',
          },
          {
            to: 'https://learn.skilltrack.ai/',
            label: 'Learn',
            position: 'left',
          },
          {
            href: 'https://github.com/skilltrack-ai/documentation',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            to: 'https://skilltrack.ai/pricing/',
            label: 'Pricing',
            position: 'right',
          },
          {
            to: 'https://auth.skilltrack.ai/login',
            label: 'Login',
            position: 'right',
            className: "nav-link_login",
          },
        ],
      },
    }),
};

module.exports = config;
