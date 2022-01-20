export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";

export const setDarkMode = (darkMode) => {
  return { type: TOGGLE_DARK_MODE, darkMode: darkMode };
};
