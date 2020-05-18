module.exports = {
  title: 'DAO Research Docs',
  tagline: 'All DAOs all day!',
  url: 'https://daoresearch.github.io',
  baseUrl: '/docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'daoresearch', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DAOresearch',
      logo: {
        alt: 'DAOresearch Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/0-to-dao',
          activeBasePath: 'docs',
          label: 'DAOshop',
          position: 'left',
        },
        {
          href: 'https://www.notion.so/b78fb07170364f5b8d489e64ddac0128?v=b6b687f83e6d43c291b7863bce1bef8c',
          label: 'DAO\'s in the Wild',
          position: 'left',
        },
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'left'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'DAOs 101',
              to: 'docs/doc1',
            },
            {
              label: 'DAO\'s in the Wild',
              to: 'docs/doc2',
            },
            {
              label: 'DAO Related Things',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '💬 Discord',
              href: 'https://discord.gg/7TkMrVK',
            },
            {
              label: '🦜 Twitter',
              href: ' https://twitter.com/DaoResearch/',
            },
            {
              label: '📧 Newsletter',
              href: 'https://daoresearch.substack.com/',
            },
            {
              label: '📜 Blog',
              to: 'blog',
            },
          ],
        },
        {
          title: 'Services',
          items: [
            {
              label: 'DAOshop',
              to: 'docs/0-to-dao',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DAOresearch <br> <a href="https://docusaurus.io/">🦖 Built with Docusaurus</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
