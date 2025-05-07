import {
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type IconButtonProps = {
  icon: any;
  size: number;
  color?: string;
  onPress: (evt: GestureResponderEvent) => void;
};

const IconButton = ({ icon, size, color, onPress }: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View className="rounded-3xl p-[6px] my-[2px] mx-2">
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
