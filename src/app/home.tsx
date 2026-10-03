import { View, Text } from "react-native";
import { quickActions, upcomingBooking, services } from "../data";

export default function Home() {
  return (
    <View className="flex-1 bg-white px-5 pt-14">
      {/* Header */}
      <View className="flex-row items-center justify-between">
        {/* Greeting + Location */}
        <View>
          <Text className="text-2xl font-bold text-black">Good morning 👋</Text>

          <Text className="mt-1 text-sm text-gray-500">
            📍 Current location — Saket, New Delhi
          </Text>
        </View>

        {/* Icons */}
        <View className="flex-row gap-4">
          <Text className="text-2xl">🔔</Text>
          <Text className="text-2xl">👤</Text>
        </View>
      </View>
      {/* search bar */}
      <View className="mt-6 flex-row items-center rounded-2xl border border-gray-200 bg-gray-100 px-4 py-4">
        <Text className="mr-3 text-xl">🔍</Text>

        <Text className="text-base text-gray-400">Search for a service...</Text>
      </View>

      {/* Quick Actions */}
      <View className="mt-6">
        <Text className="mb-3 text-lg font-bold text-black">Quick Actions</Text>

        <View className="flex-row flex-wrap justify-between">
          {quickActions.map((action) => (
            <View
              key={action.id}
              className="mb-3 w-[48%] rounded-2xl bg-gray-100 p-4"
            >
              <Text className="text-base font-semibold text-black">
                {action.title}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Upcoming Booking */}
      <View className="mt-6">
        <Text className="mb-3 text-lg font-bold text-black">
          Upcoming Booking
        </Text>

        <View className="rounded-2xl bg-gray-100 p-5">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold text-black">
              {upcomingBooking.service}
            </Text>

            <Text className="text-sm font-semibold text-green-600">
              {upcomingBooking.status}
            </Text>
          </View>

          <Text className="mt-2 text-sm text-gray-500">
            {upcomingBooking.professional}
          </Text>

          <Text className="mt-1 text-sm text-gray-500">
            {upcomingBooking.date} • {upcomingBooking.time}
          </Text>
        </View>
      </View>

      {/* Services */}
      <View className="mt-6">
        <View className="mb-3 flex-row items-center justify-between">
          <Text className="text-lg font-bold text-black">Services</Text>

          <Text className="text-sm font-semibold text-blue-600">See All</Text>
        </View>

        <View className="flex-row flex-wrap justify-between">
          {services.map((service) => (
            <View
              key={service.id}
              className="mb-3 w-[30%] items-center rounded-2xl bg-gray-100 p-4"
            >
              <Text className="text-center text-sm font-semibold text-black">
                {service.name}
              </Text>
            </View>
          ))}
        </View>
      </View>

      
    </View>
  );
}
