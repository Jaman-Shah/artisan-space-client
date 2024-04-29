import React, { createContext, useEffect, useState } from "react";
import { getThemeValue } from "../components/utils/themeController";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [darkValue, setDarkValue] = useState(false);

  useEffect(() => {
    if (getThemeValue() === null) {
      setDarkValue(false);
    } else {
      setDarkValue(getThemeValue());
    }
    // setDarkValue(getThemeValue());
  }, []);
  const themeInfo = {
    darkValue,
    setDarkValue,
  };
  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
