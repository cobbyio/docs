import React from 'react';
import { usePlatform } from '../context/PlatformContext';

const platforms = [
  { value: 'all', label: 'All Platforms' },
  { value: 'magento', label: 'Magento' },
  { value: 'shopware', label: 'Shopware' },
];

export default function PlatformSwitcher() {
  const { platform, setPlatform, isLoaded } = usePlatform();

  if (!isLoaded) {
    return (
      <div className="platform-switcher platform-switcher--loading">
        <span className="platform-switcher__label">Platform:</span>
        <span className="platform-switcher__value">Loading...</span>
      </div>
    );
  }

  return (
    <div className="platform-switcher">
      <span className="platform-switcher__label">Platform:</span>
      <select
        className="platform-switcher__select"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        aria-label="Select platform"
      >
        {platforms.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </select>
    </div>
  );
}
