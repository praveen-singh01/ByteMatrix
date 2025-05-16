"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      className="fixed top-4 right-4 z-50 flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        style={{
          backgroundColor: isDark ? '#3b82f6' : '#d1d5db'
        }}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <span className="sr-only">Toggle theme</span>
        <motion.span
          className="inline-block h-5 w-5 rounded-full bg-white shadow-lg"
          animate={{
            x: isDark ? '100%' : '0%',
            translateX: isDark ? '-0.25rem' : '0.25rem'
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
        <span
          className={`absolute left-1 text-xs font-medium ${isDark ? 'opacity-0' : 'text-gray-500 opacity-100'}`}
          style={{ transition: 'opacity 0.2s' }}
        >
          L
        </span>
        <span
          className={`absolute right-1 text-xs font-medium ${isDark ? 'text-white opacity-100' : 'opacity-0'}`}
          style={{ transition: 'opacity 0.2s' }}
        >
          D
        </span>
      </button>
    </motion.div>
  );
}
