import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ProfileCard } from './components/ProfileCard';
import { PROFILE_DATA } from './constants';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply logic
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    // Added overflow-x-hidden to prevent horizontal scroll from blobs
    <div className="min-h-screen w-full bg-[#f9fafb] dark:bg-gray-950 flex flex-col transition-colors duration-300 relative overflow-x-hidden font-sans">
      
      {/* Technical Dot Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20" 
           style={{
             backgroundImage: isDark 
               ? 'radial-gradient(#ffffff 1px, transparent 1px)' 
               : 'radial-gradient(#000000 1px, transparent 1px)',
             backgroundSize: '24px 24px'
           }}>
      </div>
      
      {/* Header / Brand Name & Toggle */}
      <header className="w-full p-6 sm:p-10 flex justify-between items-center z-20 shrink-0 relative">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-colors tracking-tight">Jairo Capua</h2>
        
        <button
          onClick={toggleTheme}
          className="p-2.5 sm:p-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 dark:focus:ring-gray-700 cursor-pointer"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-start sm:justify-center px-4 py-6 sm:py-12 pb-16 sm:pb-24 relative z-10">
        <ProfileCard data={PROFILE_DATA} isDark={isDark} />
      </main>
      
      {/* Footer */}
      <footer className="w-full p-6 sm:p-8 text-center mt-auto shrink-0 z-10 relative">
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Jairo Capua.
        </p>
      </footer>
      
    </div>
  );
};

export default App;