import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import { Banner as BannerType } from "../types/Banners";

type BannerProps = {
  banner: BannerType;
};

export const Banner: React.FC<BannerProps> = ({
  banner: { imgUrl, title, subtitle },
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imgUrl,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 170,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  textContainer: {
    width: "100%",
    height: "100%",
    padding: 20,
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    fontWeight: "300",
  },
});
