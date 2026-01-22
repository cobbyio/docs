// Plugin to transfer frontmatter 'platform' field to sidebar customProps
// This enables filtering articles by platform in the sidebar

module.exports = function platformFilterPlugin(context, options) {
  return {
    name: 'platform-filter-plugin',

    async contentLoaded({ content, actions }) {
      // This plugin doesn't need to load content itself
      // The filtering happens via the DocSidebarItem wrapper
    },

    // Extend the docs plugin to include platform in customProps
    configureWebpack(config, isServer, utils) {
      return {};
    },
  };
};

// Alternative approach: Use sidebarItemsGenerator
// This can be added to each docs plugin config in docusaurus.config.js
module.exports.sidebarItemsGenerator = async function ({
  defaultSidebarItemsGenerator,
  docs,
  ...args
}) {
  const sidebarItems = await defaultSidebarItemsGenerator({ docs, ...args });

  // Recursively add customProps.platform from frontmatter
  function addPlatformToItems(items) {
    return items.map((item) => {
      if (item.type === 'doc') {
        const doc = docs.find((d) => d.id === item.id);
        if (doc?.frontMatter?.platform) {
          return {
            ...item,
            customProps: {
              ...item.customProps,
              platform: doc.frontMatter.platform,
            },
          };
        }
      }
      if (item.type === 'category' && item.items) {
        return {
          ...item,
          items: addPlatformToItems(item.items),
        };
      }
      return item;
    });
  }

  return addPlatformToItems(sidebarItems);
};
