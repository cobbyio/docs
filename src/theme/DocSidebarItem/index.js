import React from 'react';
import DocSidebarItem from '@theme-original/DocSidebarItem';
import { usePlatform } from '../../context/PlatformContext';

// Helper to check if an item should be visible based on platform
function shouldShowItem(item, currentPlatform) {
  // If no platform filter is active, show everything
  if (currentPlatform === 'all') {
    return true;
  }

  // Check customProps for platform metadata
  const itemPlatform = item.customProps?.platform;

  // If no platform specified, show the item (it's platform-agnostic)
  if (!itemPlatform) {
    return true;
  }

  // If platform is 'all', always show
  if (itemPlatform === 'all') {
    return true;
  }

  // Show if platforms match
  return itemPlatform === currentPlatform;
}

// Recursively filter items for categories
function filterItems(items, currentPlatform) {
  if (!items) return items;

  return items
    .filter((item) => shouldShowItem(item, currentPlatform))
    .map((item) => {
      if (item.items) {
        return {
          ...item,
          items: filterItems(item.items, currentPlatform),
        };
      }
      return item;
    })
    // Remove empty categories after filtering
    .filter((item) => !item.items || item.items.length > 0);
}

export default function DocSidebarItemWrapper(props) {
  const { platform } = usePlatform();
  const { item } = props;

  // Debug logging - remove after testing
  console.log('DocSidebarItem:', item.label, 'platform:', item.customProps?.platform, 'current:', platform);

  // Check if this item should be shown
  if (!shouldShowItem(item, platform)) {
    return null;
  }

  // If it's a category, filter its children
  if (item.type === 'category' && item.items) {
    const filteredItems = filterItems(item.items, platform);

    // Don't render empty categories
    if (filteredItems.length === 0) {
      return null;
    }

    return (
      <DocSidebarItem
        {...props}
        item={{
          ...item,
          items: filteredItems,
        }}
      />
    );
  }

  return <DocSidebarItem {...props} />;
}
