import React from 'react';
import { PlatformProvider } from '../context/PlatformContext';

// Docusaurus Root wrapper - wraps the entire app with providers
export default function Root({ children }) {
  return (
    <PlatformProvider>
      {children}
    </PlatformProvider>
  );
}
