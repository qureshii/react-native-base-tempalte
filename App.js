import { useFonts } from "@expo-google-fonts/roboto";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
  useTheme,
} from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { extendTheme, NativeBaseProvider } from "native-base";
import { Provider as ReduxProvider, useSelector } from "react-redux";
import ReduxThunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import React, { useState } from "react";
import { SafeAreaView, useColorScheme } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import darkModeReducer from "./store/theme/theme-reducer";
import { customTheme, expoRobotoFonts } from "./theme/theme";
import { StatusBar } from "expo-status-bar";
import themeReducer from "./store/theme/theme-reducer";

const rootReducer = combineReducers({
  appTheme: themeReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [fontLoaded] = useFonts(expoRobotoFonts);
  if (!fontLoaded) {
    return (
      <SafeAreaView>
        <AppLoading />
      </SafeAreaView>
    );
  }

  return (
    <ReduxProvider store={store}>
      <AppContainer />
    </ReduxProvider>
  );
}

const navigationTheme = (appTheme) => {
  const selectedTheme = appTheme.darkMode
    ? NavigationDarkTheme
    : NavigationDefaultTheme;

  return {
    ...selectedTheme,
    dark: appTheme.darkMode,
    colors: {
      ...selectedTheme.colors,
      border: "grey",
      primary: appTheme.ACTIVE[500],
      text: appTheme.ACTIVE[500],
      card: appTheme.darkMode ? appTheme.BG_DARK : appTheme.BG_LIGHT,
      background: appTheme.darkMode ? appTheme.BG_DARK : appTheme.BG_LIGHT,
    },
  };
};
const AppContainer = () => {
  const appTheme = useSelector((state) => state.appTheme);
  const nativeTheme = useTheme();
  // console.log(nativeTheme);
  return (
    <NavigationContainer theme={navigationTheme(appTheme)}>
      <NativeBaseProvider theme={extendTheme(customTheme)}>
        <StatusBar style={appTheme.statusBar} />
        <AppNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};
