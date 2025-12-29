'use client';

import { useLayoutEffect, useState } from 'react';

function getInitialTheme() {
  if (typeof window === 'undefined') return false;

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return savedTheme === 'dark' || (!savedTheme && prefersDark);
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useLayoutEffect(() => {
    // Apply the theme class on mount
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newIsDark = !prev;

      // Update DOM and localStorage
      document.documentElement.classList.toggle('dark', newIsDark);
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');

      return newIsDark;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-retro-cream dark:bg-retro-brown border-2 border-retro-brown dark:border-retro-cream transition-colors duration-300 hover:scale-110 transform focus:outline-none focus:ring-4 focus:ring-retro-burntOrange dark:focus:ring-retro-golden"
      aria-label="Toggle theme"
      aria-live="polite"
    >
      {isDark ? (
        // Sun icon for dark mode (click to go light)
        <svg
          className="w-6 h-6 text-retro-golden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon icon for light mode (click to go dark)
        <svg
          className="w-6 h-6 text-retro-brown"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
