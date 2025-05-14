import { ReactNode } from "react";
import {
  View,
  Text,
  GestureResponderEvent,
  TouchableOpacity,
} from "react-native";

type ButtonProps = {
  children?: ReactNode;
  onPress?: (evt: GestureResponderEvent) => void;
  mode: string;
  className: string;
};

const Button = ({ children, onPress, mode, className }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded-md p-2 bg-indigo-500 active:opacity-75 active:bg-indigo-100 ${className}`}
    >
      <View
        className={[
          "w-full",
          "p-2",
          "rounded-md",
          mode === "flat" && "bg-transparent",
        ].join(" ")}
      >
        <Text
          className={[
            "text-center",
            mode === "flat" ? "color-indigo-200" : "text-white",
          ].join(" ")}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
