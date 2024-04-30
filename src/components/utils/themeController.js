// getting the current theme from local storage

export const getThemeValue = () => {
  return JSON.parse(localStorage.getItem("current_theme"));
};

// setting the users click to the local storage

export const setThemeValue = (currentTheme) => {
  return localStorage.setItem("current_theme", JSON.stringify(currentTheme));
};
