import { View, Text, TextInput, TextInputProps } from "react-native";

type InputProps = {
  label: string;
  config?: TextInputProps;
  className?: string;
};

const Input = ({ label, className, config }: InputProps) => {
  let textMultilineStyle: string[] = [];
  if (config && config.multiline) {
    textMultilineStyle = ["min-h-[100px]", "align-top"];
  }

  return (
    <View className={`${className} mx-1 my-2`}>
      <Text className="text-sm text-indigo-100 mb-1">{label}</Text>
      <TextInput
        className={`${[
          "bg-indigo-100",
          "text-indigo-700",
          "p-[6px]",
          "rounded-md",
          "text-lg",
          ...textMultilineStyle,
        ].join(" ")}`}
        {...config}
      ></TextInput>
    </View>
  );
};

export default Input;
