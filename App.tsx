import "./global.css";

import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-2xl font-bold text-white">
        OnnCall
      </Text>

      <Text className="mt-2 text-gray-400">
        Styling setup successful
      </Text>
    </View>
  );
}