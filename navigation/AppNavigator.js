import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import {
  Box,
  Center,
  Divider,
  HStack,
  Icon,
  Pressable,
  Switch,
  Text,
  useColorMode,
  View,
  VStack,
} from "native-base";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as themeActions from "../store/theme/theme-actions";
import { THEME_MODE } from "../theme/theme";
const Drawer = createDrawerNavigator();
function Component(props) {
  return (
    <Center
      _dark={{ bg: THEME_MODE.BG_DARK }}
      _light={{ bg: THEME_MODE.BG_LIGHT }}
      rounded={9}
    >
      <Text mt="12" fontSize="18">
        This is {props.route.name} page.
      </Text>
    </Center>
  );
}

const getIcon = (screenName) => {
  switch (screenName) {
    case "Inbox":
      return "email";
    case "Outbox":
      return "send";
    case "Favorites":
      return "heart";
    case "Archive":
      return "archive";
    case "Trash":
      return "trash-can";
    case "Spam":
      return "alert-circle";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const appTheme = useSelector((state) => state.appTheme);
  const dispatch = useDispatch();
  const onToggleDarkMode = (value) => {
    toggleColorMode();
    dispatch(themeActions.setDarkMode(value));
  };
  return (
    <View flex={1}>
      <DrawerContentScrollView {...props}>
        <VStack space="6" my="2" mx="1">
          <Box px="4" mb={10}>
            <Text  >
              Mail
            </Text>
            <Text fontSize="14" mt="1" fontWeight="500">
              john_doe@gmail.com
            </Text>
          </Box>
          <VStack divider={<Divider />} space="4">
            <VStack space="3">
              {props.state.routeNames.map((name, index) => (
                <Pressable
                  key={index}
                  px="5"
                  py="3"
                  rounded="md"
                  bg={
                    index === props.state.index
                      ? appTheme.ACTIVE[50]
                      : "transparent"
                  }
                  onPress={(event) => {
                    props.navigation.navigate(name);
                  }}
                >
                  <HStack space="7" alignItems="center">
                    <Icon
                      color={
                        index === props.state.index ? "primary.500" : "gray.500"
                      }
                      size="5"
                      as={<MaterialCommunityIcons name={getIcon(name)} />}
                    />
                    <Text
                      color={
                        index === props.state.index ? "primary.600" : "gray.500"
                      }
                    >
                      {name}
                    </Text>
                  </HStack>
                </Pressable>
              ))}
            </VStack>
            <VStack space="5">
              <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
                Preference
              </Text>
              <VStack space="3">
                <HStack space={2} alignItems="center" px="4">
                  <Text>Light</Text>
                  <Switch
                    isChecked={colorMode !== "light" ? true : false}
                    onToggle={onToggleDarkMode}
                    aria-label={
                      colorMode === "light"
                        ? "switch to dark mode"
                        : "switch to light mode"
                    }
                  />
                  <Text>Dark</Text>
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </DrawerContentScrollView>
    </View>
  );
}

function AppDrawer() {
  const appTheme = useSelector((state) => state.appTheme);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: appTheme.ACTIVE[500],
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Inbox" component={Component} />
      <Drawer.Screen name="Outbox" component={Component} />
      <Drawer.Screen name="Favorites" component={Component} />
      <Drawer.Screen name="Archive" component={Component} />
      <Drawer.Screen name="Trash" component={Component} />
      <Drawer.Screen name="Spam" component={Component} />
    </Drawer.Navigator>
  );
}
const AppNavigator = () => {
  return <AppDrawer />;
};

export default AppNavigator;
