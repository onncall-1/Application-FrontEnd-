import { View, Text, TextInput, ScrollView, Pressable } from "react-native";

export default function Marketplace() {
  return (
    <View className="flex-1 bg-[#111111]">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header */}
        <View className="px-6 pt-14">
          <Text className="text-3xl font-bold text-white">
            Find a professional
          </Text>

          <Text className="mt-2 text-gray-400">
            Find trusted professionals for your needs
          </Text>
        </View>

        {/* Search */}
        <View className="mx-6 mt-6">
          <TextInput
            placeholder="Search for a service..."
            placeholderTextColor="#888"
            className="rounded-xl bg-[#1f1f1f] px-4 py-4 text-white"
          />
        </View>

        {/* Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-5 px-6"
        >
          <Pressable className="mr-3 rounded-full bg-white px-5 py-3">
            <Text className="font-semibold text-black">
              Recommended
            </Text>
          </Pressable>

          <Pressable className="mr-3 rounded-full bg-[#1f1f1f] px-5 py-3">
            <Text className="text-white">Nearest</Text>
          </Pressable>

          <Pressable className="mr-3 rounded-full bg-[#1f1f1f] px-5 py-3">
            <Text className="text-white">Price</Text>
          </Pressable>

          <Pressable className="mr-3 rounded-full bg-[#1f1f1f] px-5 py-3">
            <Text className="text-white">Rating</Text>
          </Pressable>

          <Pressable className="rounded-full bg-[#1f1f1f] px-5 py-3">
            <Text className="text-white">Filters</Text>
          </Pressable>
        </ScrollView>

        {/* Categories */}
        <View className="mt-8 px-6">
          <Text className="text-xl font-bold text-white">
            Categories
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-4"
          >
            {[
              "Salon",
              "Rentals",
              "Transport",
              "Agri Labor",
              "Other Services",
            ].map((category) => (
              <Pressable
                key={category}
                className="mr-3 rounded-xl bg-[#1f1f1f] px-5 py-4"
              >
                <Text className="text-white">{category}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Professionals */}
        <View className="mt-8 px-6">
          <Text className="text-xl font-bold text-white">
            Professionals
          </Text>

          {/* Professional Card */}
          <View className="mt-4 rounded-2xl bg-[#1f1f1f] p-5">
            <Text className="text-xl font-bold text-white">
              Ravi Joshi
            </Text>

            <Text className="mt-1 text-gray-400">
              AC Repair & Service
            </Text>

            <Text className="mt-3 text-white">
              ⭐ 4.8 • 547 jobs
            </Text>

            <Text className="mt-2 text-gray-400">
              📍 2.4 km away
            </Text>

            <Text className="mt-2 text-green-400">
              Available today
            </Text>

            <Text className="mt-3 text-white">
              Starting from ₹499
            </Text>

            <View className="mt-5 flex-row">
              <Pressable className="mr-3 flex-1 rounded-xl border border-gray-600 py-3">
                <Text className="text-center font-semibold text-white">
                  View Profile
                </Text>
              </Pressable>

              <Pressable className="flex-1 rounded-xl bg-white py-3">
                <Text className="text-center font-semibold text-black">
                  Book Now
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 flex-row justify-around border-t border-gray-800 bg-[#151515] py-5">
        <Text className="text-gray-400">Home</Text>

        <Text className="font-bold text-white">
          Marketplace
        </Text>

        <Text className="text-gray-400">Bookings</Text>

        <Text className="text-gray-400">Inbox</Text>

        <Text className="text-gray-400">Profile</Text>
      </View>
    </View>
  );
}