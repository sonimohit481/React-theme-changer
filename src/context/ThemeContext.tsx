import React, { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
const [themeMode, setThemeMode] = useState("light");

const lightTheme = () => {
  setThemeMode("light");
};

const darkTheme = () => {
  setThemeMode("dark");
};

useEffect(() => {
  const htmlElement = document.querySelector("html");
  htmlElement?.classList.remove("light", "dark");
  htmlElement?.classList.add(themeMode);
}, [themeMode]);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}
