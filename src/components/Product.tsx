import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Product as ProductType } from "../types/Product";
import { categoryColors } from "../styles/colors";

const formatCategory = (cat: string) => {
  return cat.replace(/ /g, "");
};

type ProductProps = {
  product: ProductType;
  onSelect?: (id: string) => void;
};

export const Product: React.FC<ProductProps> = ({
  product: { cardType, typeLabel, urlImage, name },
  onSelect,
}) => {
  const catColor = categoryColors[formatCategory(typeLabel)] || "black";
  const isSmall = cardType === "sm";

  return (
    <TouchableOpacity
      onPress={() => onSelect(name)}
      style={[
        styles.container,
        {
          borderTopColor: catColor,
          width: isSmall ? "50%" : "100%",
          height: isSmall ? 200 : 280,
        },
      ]}
    >
      <View style={styles.typeBox}>
        <Text style={{ color: catColor }}>{typeLabel}</Text>
      </View>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={{
            uri: urlImage,
          }}
        />
      </View>
      <View style={styles.descriptionBox}>
        <Text
          style={[
            styles.description,
            {
              maxWidth: isSmall ? "85%" : "70%",
              fontSize: isSmall ? 14 : 16,
              lineHeight: isSmall ? 16 : 20,
            },
          ]}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderTopWidth: 8,
    borderRadius: 8,
    marginTop: 10,
  },
  typeBox: {
    padding: 6,
    flex: 1,
  },
  imageBox: {
    flex: 8,
    alignItems: "center",
  },
  descriptionBox: {
    padding: 6,
    paddingBottom: 12,
    flex: 2,
    alignItems: "center",
  },
  description: {
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 20,
  },
  image: {
    width: "65%",
    height: "100%",
  },
});
