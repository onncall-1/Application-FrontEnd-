import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RoleScreen() {
  const handleRoleSelect = (role: "customer" | "provider") => {
    console.log("Selected role:", role);

    // Temporary navigation for frontend testing
    router.push({
      pathname: "/(auth)/role",
      params: { role },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F4F4F2]">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-6 pb-10"
        showsVerticalScrollIndicator={false}
      >
        {/* Brand */}
        <View className="pt-5">
          <Text className="text-[13px] font-semibold tracking-[2px] text-[#777773]">
            ONNCALL
          </Text>
        </View>

        {/* Header */}
        <View className="mt-10">
          <Text className="text-[36px] font-bold leading-[42px] text-[#181816]">
            How will you use OnnCall?
          </Text>

          <Text className="mt-4 text-[17px] leading-[25px] text-[#666662]">
            Choose an option to personalize your experience.
          </Text>
        </View>

        {/* Role cards */}
<View className="mt-10 gap-4">
  {/* Customer */}
  <Pressable
    onPress={() => handleRoleSelect("customer")}
    className="rounded-[24px] border border-[#D4D4D0] bg-white p-6 active:bg-[#F0F0ED] "
  >
    <View className="h-12 w-12 items-center justify-center rounded-[16px] bg-[#F0F0ED]">
      <Text className="text-[23px]">👤</Text>
    </View>

    <Text className="mt-6 text-[23px] font-bold text-[#181816]">
      I'm a Customer
    </Text>

    <Text className="mt-2 text-[15px] leading-[22px] text-[#6F6F6A]">
      Find trusted professionals and book services whenever you need them.
    </Text>

    <View className="mt-6 flex-row items-center">
      <Text className="text-[14px] font-bold text-[#242422]">
        Continue as Customer
      </Text>

      <Text className="ml-2 text-[16px] text-[#777773]">
        →
      </Text>
    </View>
  </Pressable>

  {/* Provider */}
  <Pressable
    onPress={() => handleRoleSelect("provider")}
    className="rounded-[24px] border border-[#C8C8C4] bg-[#E6E6E2] p-6 active:bg-[#DCDCD8]"
  >
    <View className="h-12 w-12 items-center justify-center rounded-[16px] bg-[#D2D2CE]">
      <Text className="text-[23px]">🛠️</Text>
    </View>

    <Text className="mt-6 text-[23px] font-bold text-[#181816]">
      I'm a Provider
    </Text>

    <Text className="mt-2 text-[15px] leading-[22px] text-[#666662]">
      Offer your services, connect with customers, and grow your business.
    </Text>

    <View className="mt-6 flex-row items-center">
      <Text className="text-[14px] font-bold text-[#242422]">
        Continue as Provider
      </Text>

      <Text className="ml-2 text-[16px] text-[#555551]">
        →
      </Text>
    </View>
  </Pressable>
</View>

       
      </ScrollView>
    </SafeAreaView>
  );
}