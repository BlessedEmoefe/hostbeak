# Custom Hooks

All custom hooks definitions will be documented here. When you create a new hook add it to the definition list below.

## Defining a hook

Define your hooks simple enough for non-programmers to understand. Also provide usage examples to assist developers
 with understanding how to get started with your hook.
 
 ---
 
 ### useDarkMode
 
 The `useDarkMode()` hook automatically detects the color preference of a client and adjusts the themes accordingly. It supports the `prefers-color-scheme` media query to set the mode according to the user’s OS color scheme settings.

The user's choice is saved in a client storage for persistence.

#### Examples

**Step 1**: Create state variables and state controller functions:

```js
  const [theme, setTheme] = useState('light');
  const [hasMounted, setHasMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode)
  };

  const toggleTheme = () => theme === 'light'
    ? setMode('dark')
    : setMode('light');
```

**Step 2**: Create a `useEffect()` to control color selection and return computed values with the toggleTheme function:

```js
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
```

#### Usage

Import `useDarkTheme()` and consume it in your file like this:

```js
  const [theme, toggleTheme, hasMounted] = useDarkMode();

  return !hasMounted ? (<div />) : (
    <ThemeProvider theme={theme}>
      <GlobalStylesNormalizr />
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
      {children}
    </ThemeProvider>
  )
```
