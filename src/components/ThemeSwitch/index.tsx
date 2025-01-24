// components/ThemeSwitcher.js
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { IconDark, IconLight } from '../Icons';


const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex size-8 items-center justify-center rounded-full transition-colors duration-300"
    >
      {theme === 'dark' ? <IconLight /> : <IconDark />}
    </button>
  );
};

export default ThemeSwitcher;
