import colors from "native-base/src/theme/base/colors";
import {
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/roboto";
export const PAPER_UI = {
  50: "#f2e3ff",
  100: "#d3b2ff",
  200: "#b47fff",
  300: "#964dff",
  400: "#781aff",
  500: "#5f00e6",
  600: "#4a00b4",
  700: "#350082",
  800: "#200050",
  900: "#0d0020",
};
export const ANIMATED_UI = {
  50: "#EEF2F6",
  100: "#CFD9E7",
  200: "#B1C1D8",
  300: "#92A9C9",
  400: "#7491B9",
  500: "#5578AA",
  600: "#446088",
  700: "#334866",
  800: "#223044",
  900: "#111822",
};
export const BLUE = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
};
export const GREEN = {
  50: "#dcffef",
  100: "#fff",
  200: "#7effbe",
  300: "#4dffa5",
  400: "#21ff8d",
  500: "#00AB55",
  600: "#002db4",
  700: "#00803e",
  800: "#004d24",
  900: "#001c08",
};
export const DEEP_PURPLE = {
  50: "#ede7f6",
  100: "#d1c4e9",
  200: "#b39ddb",
  300: "#9575cd",
  400: "#7e57c2",
  500: "#673ab7",
  600: "#5e35b1",
  700: "#512da8",
  800: "#4527a0",
  900: "#311b92",
};

export const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

export const PRIMARY = {
  50: "#fff",
  100: "#C8FACD",
  200: "#5BE584",
  500: "#00AB55",
  600: "#007B55",
  700: "#005249",
  800: "#004d24",
  900: "#001c08",
  contrastText: "#fff",
};
export const SECONDARY = {
  50: "#e0ecff",
  100: "#D6E4FF",
  200: "#84A9FF",
  500: "#3366FF",
  600: "#1939B7",
  700: "#091A7A",
  800: "#001351",
  900: "#000621",
  contrastText: "#fff",
};
const CUSTOM_YELLOW = {
  50: "#fffde7",
  100: "#fff9c4",
  200: "#fff59d",
  300: "#fff176",
  400: "#ffee58",
  500: "#fdd835",
  600: "#fdd835",
  700: "#fbc02d",
  800: "#f9a825",
  900: "#f57f17",
};
export const expoRobotoFonts = {
  "Roboto-Light": Roboto_300Light,
  "Roboto-LightItalic": Roboto_300Light_Italic,
  "Roboto-Regular": Roboto_400Regular,
  "Roboto-RegularItalic": Roboto_400Regular_Italic,
  "Roboto-Medium": Roboto_500Medium,
  "Roboto-MediumItalic": Roboto_500Medium_Italic,
  "Roboto-Bold": Roboto_700Bold,
  "Roboto-BoldItalic": Roboto_700Bold_Italic,
  "Roboto-Black": Roboto_900Black,
  "Roboto-BlackItalic": Roboto_900Black_Italic,
};
export const robotoFonts = {
  100: {
    normal: "Roboto-Light",
    italic: "Roboto-LightItalic",
  },

  200: {
    normal: "Roboto-Regular",
    italic: "Roboto-RegularItalic",
  },
  300: {
    normal: "Roboto-Medium",
    italic: "Roboto-MediumItalic",
  },
  400: {
    normal: "Roboto-Bold",
    italic: "Roboto-BoldItalic",
  },
  500: {
    normal: "Roboto-Black",
    italic: "Roboto-BlackItalic",
  },
};
const ACTIVE_COLOR = colors.yellow;
// const ACTIVE_COLOR = BLUE;
export const THEME_MODE = {
  BG_LIGHT: colors.blueGray[50],
  BG_DARK: colors.blueGray[900],
  LIGHT: ACTIVE_COLOR[50],
  DARK: ACTIVE_COLOR[900],

  ACTIVE: ACTIVE_COLOR,
  // ACTIVE: ACTIVE_COLOR,
};

export const customTheme = {
  colors: {
    primary: THEME_MODE.ACTIVE,
  },
  fontConfig: {
    Roboto: robotoFonts,
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto",
  },
  config: {
    initialColorMode: "light",
  },
};
