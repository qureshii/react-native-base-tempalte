import {
  HStack,
  Switch,
  Text,
  useColorMode,
  Center,
  Button,
} from "native-base";
import React from "react";
import { THEME_MODE } from "../theme/theme";

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center
      p="20"
      flex={1}
      justifyContent="center"
      _dark={{ bg: THEME_MODE.BG_DARK }}
      _light={{ bg: THEME_MODE.BG_LIGHT }}
    >
      <HStack space={2} alignItems="center">
        <Text>Dark</Text>
        <Switch
          isChecked={colorMode === "light" ? true : false}
          onToggle={toggleColorMode}
          aria-label={
            colorMode === "light"
              ? "switch to dark mode"
              : "switch to light mode"
          }
        />
        <Text>Light</Text>
      </HStack>
    </Center>
  );
}

export default ToggleDarkMode;
