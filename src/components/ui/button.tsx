import { Pressable, Text } from "react-native";

type ButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  className?: string;
};

export function Button({
  children,
  onPress,
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={className}
    >
      <Text className="text-center font-semibold">
        {children}
      </Text>
    </Pressable>
  );
}