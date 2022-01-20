import { THEME_MODE } from "../../theme/theme";
import { TOGGLE_DARK_MODE } from "./theme-actions";

const initialState = {
  darkMode: false,
  BG_LIGHT: THEME_MODE.BG_LIGHT,
  BG_DARK: THEME_MODE.BG_DARK,
  ACTIVE: THEME_MODE.ACTIVE,
  statusBar: "dark",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
     {
        return {
            ...state,
            darkMode: action.darkMode,
            statusBar: action.darkMode ? "light" : "dark",
          };
     }
  }
  return state;
};
