import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { products } from "../constants/data";
import { Button } from "../components/Button";

type DetailsProps = {
  route: any;
  product?: any;
};

export const Details: React.FC<DetailsProps> = ({
  route,
  product = products[0],
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#b3b3b3", "#FFFFFF"]} style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: product.urlImage,
          }}
        />
      </LinearGradient>
      <View style={styles.actionCard}>
        <View style={styles.information}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.text}>{product.description}</Text>
        </View>
        <View style={styles.action}>
          <Button>Added to Wishlist</Button>
          <View style={{ width: 13 }} />
          <Button highlighted>Buy Online</Button>
        </View>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: 30,
    width: "100%",
    height: 400,
  },
  actionCard: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  information: {
    height: "auto",
    borderTopColor: "#d2d2d2",
    borderTopWidth: 1,
    borderBottomColor: "#d2d2d2",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 22,
  },
  action: {
    height: 80,
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 26,
    marginBottom: 12,
  },
  price: {
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 30,
    marginBottom: 14,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: "#616161",
  },
});
