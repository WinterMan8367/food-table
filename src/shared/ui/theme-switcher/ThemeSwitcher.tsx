'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);

  useEffect(() => {
    if (theme) setCurrentTheme(theme);
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className='size-6' onClick={handleClick}>
      {currentTheme && (
        <svg xmlns='http://www.w3.org/2000/svg' className='size-full' role='image'>
          <use xlinkHref={`/icons.svg#${currentTheme}-mode`} />
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitcher;
