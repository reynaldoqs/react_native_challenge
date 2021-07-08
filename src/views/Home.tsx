import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faTag,
  faBell,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { Banner } from "../components/Banner";
import { Product } from "../components/Product";
import { products, banners } from "../constants/data";
import { redThemeColors } from "../styles/colors";

const Tab = createMaterialBottomTabNavigator();
type HomeProps = {
  navigation: any;
};

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const navigateToDetails = (name: string) => {
    navigation.navigate("details", { name });
  };

  return (
    <ScrollView style={styles.container}>
      <Banner banner={banners[0]} />
      <Product onSelect={navigateToDetails} product={products[0]} />
      <View style={styles.doubleCol}>
        <Product product={products[1]} />
        <Product product={products[2]} />
      </View>
      <Banner banner={banners[1]} />
      <View style={styles.doubleCol}>
        <Product product={products[3]} />
        <Product product={products[4]} />
      </View>
    </ScrollView>
  );
};

export const HomeNavigation = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "white",
        borderTopColor: "#f1f1f1",
        borderTopWidth: 1,
      }}
      activeColor={redThemeColors.primary}
      labeled={false}
    >
      <Tab.Screen
        name="Ticket"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faTag} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faBell} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHeart} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faUser} color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  doubleCol: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
