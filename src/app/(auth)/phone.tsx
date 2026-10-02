import { useState } from "react";
import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CountryPicker, {
  type Country,
  type CountryCode,
} from "react-native-country-picker-modal";

export default function PhoneScreen() {
  const [countryCode, setCountryCode] = useState<CountryCode>("IN");
  const [callingCode, setCallingCode] = useState("91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pickerVisible, setPickerVisible] = useState(false);

  const handleCountrySelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0] ?? "");
    setPickerVisible(false);
  };

  const handleContinue = () => {
  if (!isValidPhone) return;

  router.push({
    pathname: "/(auth)/otp",
    params: {
      phone: `+${callingCode}${phoneNumber}`,
    },
  });
};

 const isValidPhone = phoneNumber.length === 10;

  return (
    <SafeAreaView className="flex-1 bg-[#F4F4F2]">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          className="flex-1"
          contentContainerClassName="px-6 pb-10"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Brand */}
          <View className="pt-5">
            <Text className="text-[13px] font-semibold tracking-[2px] text-[#777773]">
              ONNCALL
            </Text>
          </View>

          {/* Header */}
          <View className="mt-7">
            <Text className="text-[36px] font-bold leading-[42px] text-[#181816]">
              Welcome to OnnCall
            </Text>

            <Text className="mt-4 max-w-[350px] text-[17px] leading-[25px] text-[#666662]">
              Find trusted professionals for the services you need,
              whenever you need them.
            </Text>
          </View>

          {/* Phone section */}
          <View className="mt-10">
            <Text className="text-[15px] font-bold tracking-[0.2px] text-[#333330]">
              Mobile number
            </Text>

            <View className="mt-3 flex-row gap-3">
              {/* Country selector */}
              <Pressable
                onPress={() => setPickerVisible(true)}
                className="h-[62px] w-[112px] flex-row items-center justify-center rounded-[18px] border border-[#D2D2CE] bg-white active:bg-[#EDEDEA]"
              >
                <CountryPicker
                  countryCode={countryCode}
                  visible={pickerVisible}
                  withFilter
                  withFlag
                  withCallingCode
                  withEmoji
                  withCountryNameButton={false}
                  onSelect={handleCountrySelect}
                  onClose={() => setPickerVisible(false)}
                  theme={{
                    backgroundColor: "#FFFFFF",
                    onBackgroundTextColor: "#181816",
                    primaryColor: "#242422",
                    primaryColorVariant: "#555551",
                    fontSize: 16,
                  }}
                />

                <Text className="ml-1 text-[17px] font-semibold text-[#242422]">
                  +{callingCode}
                </Text>

                <Text className="ml-2 text-[11px] text-[#777773]">
                  ▼
                </Text>
              </Pressable>

              {/* Phone input */}
              <View className="h-[62px] flex-1 justify-center rounded-[18px] border border-[#D2D2CE] bg-white px-5">
                <TextInput
                  value={phoneNumber}
                  onChangeText={(value) =>
                    setPhoneNumber(value.replace(/\D/g, ""))
                  }
                  placeholder="Enter mobile number"
                  placeholderTextColor="#9A9A95"
                  keyboardType="phone-pad"
                  maxLength={10}
                  className="text-[18px] font-medium text-[#181816]"
                  style={{
                    paddingVertical: 0,
                    includeFontPadding: false,
                  }}
                />
              </View>
            </View>

            {/* Helper text */}
            <Text className="mt-3 px-1 text-[13px] leading-[19px] text-[#858580]">
              We'll use this number to verify your account.
            </Text>
          </View>

          {/* Continue button */}
          <Pressable
            onPress={handleContinue}
            disabled={!isValidPhone}
            className={`mt-8 h-[60px] items-center justify-center rounded-[18px] ${
              isValidPhone ? "bg-[#181816]" : "bg-[#D0D0CC]"
            }`}
          >
            <Text
              className={`text-[16px] font-bold tracking-[0.2px] ${
                isValidPhone ? "text-white" : "text-[#8A8A85]"
              }`}
            >
              Send OTP
            </Text>
          </Pressable>

          {/* Terms */}
          <Text className="mt-5 px-4 text-center text-[12px] leading-[18px] text-[#8A8A85]">
            By continuing, you agree to our Terms of Service and Privacy
            Policy.
          </Text>

          {/* Trust indicator */}
          <View className="mt-10 flex-row items-center justify-center">
            <View className="h-2 w-2 rounded-full bg-[#3FA56B]" />

            <Text className="ml-2 text-[12px] font-medium text-[#777773]">
              Your number is securely verified
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}