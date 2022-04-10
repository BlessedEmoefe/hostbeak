/*
* lib: useDarkMode
* author: Favour George
* Date: April 9, 2020
* set application theme based on user's os-preference
*/

import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [hasMounted, setHasMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode)
  };

  const toggleTheme = () => theme === 'light'
    ? setMode('dark')
    : setMode('light');

  useEffect(() => {

    // Check for the existence of user selection in localStorage
    const getLocalTheme = window.localStorage.getItem('theme');

    // Check if client supports matchMedia & setMode accordingly
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !getLocalTheme ?
      setMode('dark') :
      getLocalTheme ?
        setTheme(getLocalTheme) :
        setMode('light');

    // Continue to mount DOM
    setHasMounted(true);

  }, []);

  return [theme, toggleTheme, hasMounted]
};
