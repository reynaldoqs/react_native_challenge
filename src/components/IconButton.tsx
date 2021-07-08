import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

type IconButtonProps = {
  icon: IconDefinition;
  onPress?: () => void;
  size?: number;
  style?: any;
  color?: string;
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 20,
  onPress,
  style,
  color,
}) => {
  return (
    <TouchableOpacity style={{ ...styles.iconBox, ...style }} onPress={onPress}>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          style={styles.icon}
          color={color}
          size={size}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconBox: {
    padding: 4,
  },
  icon: {
    color: "white",
  },
});
