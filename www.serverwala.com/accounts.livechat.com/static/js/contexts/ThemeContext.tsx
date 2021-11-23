import React, { createContext, useContext } from 'react';
import Location from 'modules/Location';
import { getItem, saveItem } from 'utils/session-storage';

export enum Theme {
  default = 'default',
  integration = 'integration'
}

const ThemeContext = createContext({
  theme: Theme.default,
  setTheme: (newTheme: Theme) => {}
});

export const themeStorageKey = 'accounts_theme';

export const ThemeStateProvider = ({ children }) => {
  const storedTheme = getItem(themeStorageKey);

  if (!storedTheme) {
    saveItem(themeStorageKey, Theme[Location.getUrlParam('theme')] || Theme.default);
  }

  const [theme, setTheme] = React.useState(Theme[Location.getUrlParam('theme')] || storedTheme || Theme.default);

  const handleSetTheme = (newTheme: Theme) => {
    saveItem(themeStorageKey, newTheme);
    setTheme(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
