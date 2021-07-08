import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { redThemeColors } from "../styles/colors";

type ButtonProps = {
  children: React.ReactNode;
  highlighted?: boolean;
  onPress?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  highlighted = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: highlighted
            ? redThemeColors.primary
            : redThemeColors.secondary,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: highlighted ? "white" : redThemeColors.primary },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 5,
    flex: 1,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
