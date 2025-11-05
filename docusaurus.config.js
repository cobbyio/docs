// @ts-nocheck
require("dotenv").config();
const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const tailwindPlugin = require("./plugins/tailwind-config");

const config = {
  title: "cobby Help Docs",
  url: process.env.BASE_URL,
  baseUrl: "/",
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  favicon: "img/favicon.ico",
  organizationName: "cobby GmbH & Co. KG",
  projectName: "helpcenter",
  plugins: [
    [
      "@docusaurus/plugin-google-tag-manager",
      {
        containerId: "GTM-WWS8BHM",
      },
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "tutorials",
        path: "tutorials",
        routeBasePath: "tutorials",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/cobbyio/docs/tree/main/",
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "how-to",
        path: "how-to",
        routeBasePath: "how-to",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/cobbyio/docs/tree/main/",
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "reference",
        path: "reference",
        routeBasePath: "reference",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/cobbyio/docs/tree/main/",
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "explanation",
        path: "explanation",
        routeBasePath: "explanation",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/cobbyio/docs/tree/main/",
      }),
    ],
    tailwindPlugin,
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/cobbyio/docs/tree/main/",
        },
        blog: {
          path: "release-notes",
          showReadingTime: true,
          blogSidebarCount: 10,
          blogSidebarTitle: "List",
          blogTitle: "Release Notes",
          routeBasePath: "release-notes",
          blogDescription: "Release Notes",
          postsPerPage: 10,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en"],
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: ["/", "/tutorials", "/how-to", "/reference", "/explanation"],
        blogRouteBasePath: "/release-notes",
        highlightSearchTermsOnTargetPage: true,
        removeDefaultStopWordFilter: false,
        removeDefaultStemmer: false,
        searchResultLimits: 10,
        searchResultContextMaxLength: 50,
        explicitSearchResultPath: false,
      }),
    ],
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: "Cobby Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "/tutorials/getting-started/first-steps", label: "Tutorials", position: "left" },
        { to: "/how-to/product-management/import-data", label: "How-To Guides", position: "left" },
        { to: "/reference", label: "Reference", position: "left" },
        { to: "/explanation/architecture/how-cobby-works", label: "Explanation", position: "left" },
        { to: "/release-notes", label: "Release Notes", position: "right" },
        { to: "https://customer.cobby.io/en/slides", label: "Academy", position: "right", target: "_blank" },
        { to: "https://documenter.getpostman.com/view/26334176/2sAYBPoFPm#d1f79765-6a40-4bd4-bd8a-41f171144558", label: "Open API", position: "right", target: "_blank" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          items: [
            {
              label: "cobby",
              href: process.env.BASE_URL,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} cobby GmbH & Co. KG`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      disableSwitch: true,
    },
  },
};

module.exports = config;
