import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Fix for "Cannot set property fetch of #<Window> which has only a getter"
// This occurs when libraries try to polyfill fetch in environments where it is read-only.
if (typeof window !== 'undefined') {
  const originalFetch = window.fetch;
  try {
    Object.defineProperty(window, 'fetch', {
      configurable: true,
      enumerable: true,
      get: () => originalFetch,
      set: (v) => {
        if (v !== originalFetch) {
          console.warn('Attempted to overwrite window.fetch, ignoring to prevent TypeError.');
        }
      }
    });
  } catch (e) {
    // If defineProperty fails, we just log it.
    console.warn('Could not protect window.fetch:', e);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
