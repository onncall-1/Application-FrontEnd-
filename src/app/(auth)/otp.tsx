import { useRef, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OTP_LENGTH = 6;

export default function OtpScreen() {
  const [otp, setOtp] = useState("");
  const inputRef = useRef<TextInput>(null);
  const { phone } = useLocalSearchParams<{ phone: string }>();

  const handleChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, OTP_LENGTH);
    setOtp(digits);

    if (digits.length === OTP_LENGTH) {
      Keyboard.dismiss();
    }
  };

const handleVerify = () => {
  if (otp.length !== OTP_LENGTH) return;

  if (otp === "123456") {
    router.push("/(auth)/role");
  }
};

  const isComplete = otp.length === OTP_LENGTH;

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
          <View className="mt-12">
            <Text className="text-[36px] font-bold leading-[42px] text-[#181816]">
              Verify your number
            </Text>

            <Text className="mt-4 text-[17px] leading-[25px] text-[#666662]">
              We've sent a verification code to your mobile number.
            </Text>

            <Text className="mt-2 text-[16px] font-semibold text-[#242422]">
              {phone || "Your mobile number"}
            </Text>
          </View>

          {/* OTP section */}
          <View className="mt-12">
            <Text className="text-[15px] font-bold text-[#333330]">
              Verification code
            </Text>

            {/* OTP boxes */}
            <Pressable
              onPress={() => inputRef.current?.focus()}
              className="mt-4 flex-row justify-between"
            >
              {Array.from({ length: OTP_LENGTH }).map((_, index) => {
                const digit = otp[index];

                return (
                  <View
                    key={index}
                    className={`h-[62px] w-[48px] items-center justify-center rounded-[16px] border bg-white ${
                      digit
                        ? "border-[#242422]"
                        : "border-[#D2D2CE]"
                    }`}
                  >
                    <Text className="text-[24px] font-bold text-[#181816]">
                      {digit || ""}
                    </Text>
                  </View>
                );
              })}
            </Pressable>

            {/* Hidden input */}
            <TextInput
              ref={inputRef}
              value={otp}
              onChangeText={handleChange}
              keyboardType="number-pad"
              maxLength={OTP_LENGTH}
              autoFocus
              className="absolute h-0 w-0 opacity-0"
              caretHidden
            />
          </View>

          {/* Resend */}
          <View className="mt-7 items-center">
            <Text className="text-[13px] text-[#858580]">
              Didn't receive the code?
            </Text>

            <Pressable className="mt-2">
              <Text className="text-[14px] font-bold text-[#242422]">
                Resend code
              </Text>
            </Pressable>
          </View>

          {/* Verify button */}
          <Pressable
            onPress={handleVerify}
            disabled={!isComplete}
            className={`mt-9 h-[60px] items-center justify-center rounded-[18px] ${
              isComplete ? "bg-[#181816]" : "bg-[#D0D0CC]"
            }`}
          >
            <Text
              className={`text-[16px] font-bold ${
                isComplete ? "text-white" : "text-[#8A8A85]"
              }`}
            >
              Verify number
            </Text>
          </Pressable>

          {/* Security indicator */}
          <View className="mt-10 flex-row items-center justify-center">
            <View className="h-2 w-2 rounded-full bg-[#3FA56B]" />

            <Text className="ml-2 text-[12px] font-medium text-[#777773]">
              Secure verification
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}