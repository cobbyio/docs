import React, { createContext, useContext, useState, useEffect } from 'react';

const STORAGE_KEY = 'cobby-platform';
const DEFAULT_PLATFORM = 'all';

const PlatformContext = createContext({
  platform: DEFAULT_PLATFORM,
  setPlatform: () => {},
});

export function PlatformProvider({ children }) {
  const [platform, setPlatformState] = useState(DEFAULT_PLATFORM);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && ['magento', 'shopware', 'all'].includes(stored)) {
        setPlatformState(stored);
      }
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage when platform changes
  const setPlatform = (newPlatform) => {
    setPlatformState(newPlatform);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newPlatform);
    }
  };

  return (
    <PlatformContext.Provider value={{ platform, setPlatform, isLoaded }}>
      {children}
    </PlatformContext.Provider>
  );
}

export function usePlatform() {
  const context = useContext(PlatformContext);
  if (!context) {
    throw new Error('usePlatform must be used within a PlatformProvider');
  }
  return context;
}

export default PlatformContext;
