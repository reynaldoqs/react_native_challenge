import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  faSlidersH,
  faTimes,
  faReply,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import { HomeNavigation } from "./src/views/Home";
import { Details } from "./src/views/Details";
import { redThemeColors } from "./src/styles/colors";
import { IconButton } from "./src/components/IconButton";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomeNavigation}
          options={{
            headerTitleAlign: "center",
            title: "My Feed",
            headerStyle: {
              backgroundColor: redThemeColors.primary,
            },
            headerTintColor: redThemeColors.contrast,
            headerRight: () => (
              <View style={{ paddingRight: 10 }}>
                <IconButton icon={faSlidersH} />
              </View>
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="details"
          options={{
            headerTitle: null,
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <View style={{ paddingLeft: 10 }}>
                <IconButton icon={faTimes} size={28} />
              </View>
            ),
            headerRight: () => (
              <View style={{ paddingRight: 14, flexDirection: "row" }}>
                <IconButton
                  icon={faHeart}
                  color={redThemeColors.primary}
                  size={28}
                />
                <IconButton
                  icon={faReply}
                  style={{ marginLeft: 10 }}
                  size={28}
                />
              </View>
            ),
          }}
          component={Details}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
