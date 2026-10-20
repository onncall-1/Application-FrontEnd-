
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

type Service = {
  name: string;
  description: string;
  price: number;
};

type Professional = {
  name: string;
  initials: string;
  rating: string;
  jobs: number;
  distance: string;
  price: number;
  available: boolean;
};

type CategoryData = {
  title: string;
  icon: string;
  description: string;
  services: Service[];
  professionals: Professional[];
};

const data: Record<string, CategoryData> = {
  "ac-repair": {
    title: "AC Repair",
    icon: "❄️",
    description: "Repair, maintenance & installation",
    services: [
      { name: "AC Repair", description: "Diagnose & fix cooling issues", price: 499 },
      { name: "AC Cleaning", description: "Deep clean filters & coils", price: 449 },
      { name: "AC Installation", description: "New unit setup, split & window", price: 1299 },
      { name: "AC Gas Refill", description: "Refrigerant top-up", price: 999 },
      { name: "AC Maintenance", description: "Seasonal check-up", price: 399 },
    ],
    professionals: [
      { name: "Ravi Joshi", initials: "RJ", rating: "4.5", jobs: 547, distance: "4.0 km away", price: 649, available: true },
      { name: "Pradeep Sharma", initials: "PS", rating: "4.9", jobs: 438, distance: "4.4 km away", price: 599, available: false },
      { name: "Sanjay Joshi", initials: "SJ", rating: "4.8", jobs: 482, distance: "4.5 km away", price: 499, available: true },
    ],
  },

  plumber: {
    title: "Plumber",
    icon: "🔧",
    description: "Plumbing, repairs & installation",
    services: [
      { name: "Tap Repair", description: "Fix leaking taps and faucets", price: 199 },
      { name: "Pipe Leakage", description: "Inspect and repair leaking pipes", price: 399 },
      { name: "Drain Cleaning", description: "Clear blocked drains", price: 349 },
      { name: "Bathroom Fitting", description: "Install bathroom fittings", price: 699 },
      { name: "Plumbing Inspection", description: "General plumbing check-up", price: 299 },
    ],
    professionals: [
      { name: "Aamir Khan", initials: "AK", rating: "4.8", jobs: 320, distance: "2.1 km away", price: 299, available: true },
      { name: "Imran Dar", initials: "ID", rating: "4.6", jobs: 215, distance: "3.5 km away", price: 249, available: false },
    ],
  },

  electrician: {
    title: "Electrician",
    icon: "⚡",
    description: "Electrical repair & installation",
    services: [
      { name: "Switch Repair", description: "Repair faulty switches", price: 149 },
      { name: "Fan Installation", description: "Install or replace a fan", price: 299 },
      { name: "Light Installation", description: "Fit lights and fixtures", price: 199 },
      { name: "Wiring Repair", description: "Diagnose electrical faults", price: 499 },
      { name: "Electrical Inspection", description: "General electrical check-up", price: 349 },
    ],
    professionals: [
      { name: "Bilal Ahmad", initials: "BA", rating: "4.9", jobs: 410, distance: "1.8 km away", price: 349, available: true },
      { name: "Rohit Kumar", initials: "RK", rating: "4.7", jobs: 275, distance: "3.2 km away", price: 299, available: true },
    ],
  },

  carpenter: {
    title: "Carpenter",
    icon: "🪚",
    description: "Furniture repair & woodwork",
    services: [
      { name: "Door Repair", description: "Fix hinges and door alignment", price: 249 },
      { name: "Furniture Repair", description: "Repair tables, chairs and furniture", price: 399 },
      { name: "Shelf Installation", description: "Install wall shelves", price: 299 },
      { name: "Wardrobe Repair", description: "Fix wardrobe doors and fittings", price: 349 },
      { name: "Carpentry Inspection", description: "Assess repairs and installation", price: 199 },
    ],
    professionals: [
      { name: "Sameer Bhat", initials: "SB", rating: "4.7", jobs: 190, distance: "2.7 km away", price: 399, available: true },
      { name: "Deepak Singh", initials: "DS", rating: "4.6", jobs: 160, distance: "4.1 km away", price: 349, available: false },
    ],
  },
};

export default function CategoryScreen() {
  const router = useRouter();
  const { category } = useLocalSearchParams<{ category: string }>();

  const [favorites, setFavorites] = useState<string[]>([]);

  const categoryId = Array.isArray(category) ? category[0] : category;
  const service = data[categoryId ?? "ac-repair"];

  if (!service) {
    return (
      <View className="flex-1 items-center justify-center bg-[#111111] px-6">
        <Text className="text-xl font-bold text-white">
          Category not found
        </Text>
        <Pressable
          onPress={() => router.replace("/Marketplace")}
          className="mt-5 rounded-xl bg-white px-5 py-3"
        >
          <Text className="font-semibold text-black">
            Back to Marketplace
          </Text>
        </Pressable>
      </View>
    );
  }

  const handleBooking = (serviceName: string, price: number) => {
    Alert.alert(
      "Service selected",
      `${serviceName}\nPrice: ₹${price}\n\nBooking integration will be connected to the backend next.`
    );
  };

  return (
    <View className="flex-1 bg-[#111111]">
      {/* Header */}
      <View className="flex-row items-center border-b border-[#303030] px-6 py-5">
        <Pressable
          onPress={() => router.back()}
          accessibilityLabel="Go back"
          className="mr-5"
        >
          <Text className="text-3xl text-white">‹</Text>
        </Pressable>

        <Text className="text-2xl font-bold text-white">
          {service.title}
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Category description */}
        <View className="flex-row items-center px-6 py-7">
          <View className="h-20 w-20 items-center justify-center rounded-3xl bg-[#202020]">
            <Text className="text-4xl">{service.icon}</Text>
          </View>

          <Text className="ml-5 flex-1 text-base text-gray-400">
            {service.description}
          </Text>
        </View>

        {/* Services */}
        <Text className="px-6 pb-4 pt-2 text-2xl font-bold text-white">
          Select service
        </Text>

        {service.services.map((item) => (
          <View
            key={item.name}
            className="flex-row items-center justify-between border-b border-[#303030] px-6 py-6"
          >
            <View className="mr-3 flex-1">
              <Text className="text-lg font-semibold text-white">
                {item.name}
              </Text>

              <Text className="mt-1 text-base text-gray-400">
                {item.description}
              </Text>
            </View>

            <View className="items-end">
              <Text className="mb-3 text-xl font-bold text-white">
                ₹{item.price}
              </Text>

              <Pressable
                onPress={() => handleBooking(item.name, item.price)}
                className="rounded-2xl bg-white px-5 py-4"
              >
                <Text className="font-semibold text-black">
                  Book Now
                </Text>
              </Pressable>
            </View>
          </View>
        ))}

        {/* Professionals */}
        <Text className="px-6 pb-2 pt-8 text-2xl font-bold text-white">
          Professionals near you
        </Text>

        {service.professionals.length === 0 ? (
          <Text className="px-6 py-5 text-gray-400">
            No professionals available yet.
          </Text>
        ) : (
          service.professionals.map((person) => (
            <View
              key={person.name}
              className="border-b border-[#303030] px-6 py-6"
            >
              <View className="flex-row items-center">
                <View className="h-16 w-16 items-center justify-center rounded-full border border-[#353535] bg-[#202020]">
                  <Text className="text-xl font-bold text-white">
                    {person.initials}
                  </Text>
                </View>

                <View className="ml-4 flex-1">
                  <Text className="text-xl font-bold text-white">
                    {person.name}
                  </Text>

                  <Text className="mt-1 text-gray-400">
                    {service.title} · Professional
                  </Text>

                  <Text className="mt-2 text-gray-300">
                    ★ {person.rating} · {person.jobs} jobs
                  </Text>

                  <Text className="mt-1 text-gray-400">
                    {person.distance}
                  </Text>
                </View>

                <Pressable
                  onPress={() =>
                    setFavorites((current) =>
                      current.includes(person.name)
                        ? current.filter((name) => name !== person.name)
                        : [...current, person.name]
                    )
                  }
                  accessibilityLabel={
                    favorites.includes(person.name)
                      ? "Remove favorite"
                      : "Add favorite"
                  }
                >
                  <Text className="text-3xl text-white">
                    {favorites.includes(person.name) ? "♥" : "♡"}
                  </Text>
                </Pressable>
              </View>

              <View className="mt-4 flex-row items-center justify-between">
                <Text
                  className={
                    person.available
                      ? "font-semibold text-green-400"
                      : "font-semibold text-gray-400"
                  }
                >
                  {person.available
                    ? "● Available today"
                    : "● Busy today"}
                </Text>

                <Text className="font-bold text-white">
                  From ₹{person.price}
                </Text>
              </View>

              <View className="mt-4 flex-row">
                <Pressable
                  onPress={() =>
                    Alert.alert(
                      "Professional profile",
                      `${person.name}'s full profile will be connected next.`
                    )
                  }
                  className="mr-3 flex-1 rounded-2xl border border-[#353535] py-4"
                >
                  <Text className="text-center font-semibold text-white">
                    View Profile
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() =>
                    handleBooking(service.title, person.price)
                  }
                  className="flex-1 rounded-2xl bg-white py-4"
                >
                  <Text className="text-center font-semibold text-black">
                    Book Now
                  </Text>
                </Pressable>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
