import React from "react";
import { View, Text, Pressable } from "react-native";
import { usePathname, useRouter } from "expo-router";

import {
  Home,
  Grid2X2,
  CalendarDays,
  MessageSquare,
  User,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  // ---------------------------------------------------------
  // Navigation items
  // ---------------------------------------------------------

  const navigationItems = [
    {
      name: "Home",
      route: "/home",
      icon: Home,
    },
    {
      name: "Marketplace",
      route: "/marketplace",
      icon: Grid2X2,
    },
    {
      name: "Bookings",
      route: "/bookings",
      icon: CalendarDays,
    },
    {
      name: "Inbox",
      route: "/inbox",
      icon: MessageSquare,
    },
    {
      name: "Profile",
      route: "/profile",
      icon: User,
    },
  ];

  // ---------------------------------------------------------
  // Check which page is currently active
  // ---------------------------------------------------------

  const isActive = (route: string) => {
    return pathname === route;
  };

  return (
    <SafeAreaView edges={["bottom"]} className="border-t border-gray-200 bg-white">
    <View className="flex-row items-center justify-between px-2 pt-2">

        {navigationItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.route);

          return (
            <Pressable
              key={item.name}
              onPress={() => router.push(item.route)}
              className="flex-1 items-center py-1 active:opacity-60"
            >

              {/* Icon */}

              <Icon
                size={24}
                color={active ? "#111111" : "#9CA3AF"}
                strokeWidth={active ? 2.5 : 2}
              />

              {/* Label */}

              <Text
                className={`mt-1 text-xs ${
                  active
                    ? "font-semibold text-black"
                    : "text-gray-400"
                }`}
              >
                {item.name}
              </Text>

            </Pressable>
          );
        })}

      </View>
    </SafeAreaView>
  );
}