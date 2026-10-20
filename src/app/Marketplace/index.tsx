
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

const categories = [
  {
    id: "ac-repair",
    name: "AC Repair",
    icon: "❄️",
    description: "Repair & servicing",
  },
  {
    id: "plumber",
    name: "Plumber",
    icon: "🔧",
    description: "Pipes & leakage",
  },
  {
    id: "electrician",
    name: "Electrician",
    icon: "⚡",
    description: "Electrical repairs",
  },
  {
    id: "carpenter",
    name: "Carpenter",
    icon: "🪚",
    description: "Furniture & woodwork",
  },
];

const professionals = [
  {
    id: "1",
    name: "Ravi Joshi",
    profession: "AC Repair Specialist",
    rating: "4.9",
    jobs: "120+ jobs",
    distance: "1.2 km away",
    price: "₹499",
    initials: "RJ",
    color: "#24483D",
  },
  {
    id: "2",
    name: "Aamir Khan",
    profession: "Plumbing Specialist",
    rating: "4.8",
    jobs: "95+ jobs",
    distance: "2.1 km away",
    price: "₹399",
    initials: "AK",
    color: "#39305C",
  },
  {
    id: "3",
    name: "Bilal Ahmad",
    profession: "Electrician",
    rating: "4.9",
    jobs: "150+ jobs",
    distance: "1.8 km away",
    price: "₹299",
    initials: "BA",
    color: "#594027",
  },
];

const filters = ["All", "Top Rated", "Nearest", "Available Now"];

export default function MarketplaceScreen() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("Explore");
  const [favorites, setFavorites] = useState<string[]>([]);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (id: string) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id]
    );
  };

  const openCategory = (categoryId: string) => {
    router.push({
      pathname: "/Marketplace/[category]",
      params: { category: categoryId },
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#111111" }}>
      <StatusBar barStyle="light-content" backgroundColor="#111111" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 110 }}
      >
        {/* Header */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 22,
            paddingBottom: 18,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ color: "#9CA3AF", fontSize: 13 }}>
                YOUR LOCATION
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 17,
                  fontWeight: "700",
                  marginTop: 5,
                }}
              >
                📍 Srinagar, Kashmir
              </Text>
            </View>

            <Pressable
              onPress={() => {}}
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: "#222222",
                borderWidth: 1,
                borderColor: "#333333",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>🔔</Text>
            </Pressable>
          </View>

          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 27,
              fontWeight: "800",
              marginTop: 26,
            }}
          >
            Find the right{"\n"}professional for you.
          </Text>

          <Text
            style={{
              color: "#9CA3AF",
              fontSize: 14,
              marginTop: 9,
            }}
          >
            Trusted local services, right at your doorstep.
          </Text>

          {/* Search */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#202020",
              borderRadius: 14,
              borderWidth: 1,
              borderColor: "#333333",
              paddingHorizontal: 14,
              marginTop: 22,
              height: 54,
            }}
          >
            <Text style={{ fontSize: 18, marginRight: 10 }}>🔍</Text>

            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search services..."
              placeholderTextColor="#858585"
              style={{
                flex: 1,
                color: "#FFFFFF",
                fontSize: 14,
                height: "100%",
              }}
            />

            {search.length > 0 && (
              <Pressable onPress={() => setSearch("")}>
                <Text style={{ color: "#FFFFFF", fontSize: 18 }}>×</Text>
              </Pressable>
            )}
          </View>
        </View>

        {/* Categories */}
        <View style={{ paddingHorizontal: 20, marginTop: 8 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700" }}
            >
              Browse Categories
            </Text>

            <Text style={{ color: "#A3E635", fontSize: 13 }}>
              {filteredCategories.length} services
            </Text>
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
            {filteredCategories.map((category) => (
              <Pressable
                key={category.id}
                onPress={() => openCategory(category.id)}
                style={{
                  width: "48%",
                  flexGrow: 1,
                  backgroundColor: "#1D1D1D",
                  borderWidth: 1,
                  borderColor: "#303030",
                  borderRadius: 16,
                  padding: 15,
                  minHeight: 145,
                }}
              >
                <View
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#292929",
                    borderRadius: 14,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 25 }}>{category.icon}</Text>
                </View>

                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 15,
                    fontWeight: "700",
                    marginTop: 14,
                  }}
                >
                  {category.name}
                </Text>

                <Text
                  style={{
                    color: "#9CA3AF",
                    fontSize: 11,
                    marginTop: 5,
                  }}
                >
                  {category.description}
                </Text>

                <Text
                  style={{
                    color: "#A3E635",
                    fontSize: 12,
                    fontWeight: "600",
                    marginTop: 10,
                  }}
                >
                  Explore services →
                </Text>
              </Pressable>
            ))}
          </View>

          {filteredCategories.length === 0 && (
            <Text
              style={{
                color: "#9CA3AF",
                textAlign: "center",
                marginTop: 25,
              }}
            >
              No categories found. Try another search.
            </Text>
          )}
        </View>

        {/* Filters */}
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              paddingHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700" }}
            >
              Professionals near you
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 20,
              gap: 10,
              paddingBottom: 5,
            }}
          >
            {filters.map((filter) => {
              const selected = activeFilter === filter;

              return (
                <Pressable
                  key={filter}
                  onPress={() => setActiveFilter(filter)}
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 22,
                    backgroundColor: selected ? "#A3E635" : "#222222",
                    borderWidth: 1,
                    borderColor: selected ? "#A3E635" : "#383838",
                  }}
                >
                  <Text
                    style={{
                      color: selected ? "#111111" : "#D1D5DB",
                      fontSize: 12,
                      fontWeight: "600",
                    }}
                  >
                    {filter}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* Professional cards */}
        <View style={{ paddingHorizontal: 20, marginTop: 17, gap: 14 }}>
          {professionals.map((professional) => (
            <View
              key={professional.id}
              style={{
                backgroundColor: "#1D1D1D",
                borderRadius: 17,
                borderWidth: 1,
                borderColor: "#303030",
                padding: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 17,
                    backgroundColor: professional.color,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 18,
                      fontWeight: "800",
                    }}
                  >
                    {professional.initials}
                  </Text>
                </View>

                <View style={{ flex: 1, marginLeft: 13 }}>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontWeight: "700",
                    }}
                  >
                    {professional.name}
                  </Text>

                  <Text
                    style={{
                      color: "#A3A3A3",
                      fontSize: 12,
                      marginTop: 4,
                    }}
                  >
                    {professional.profession}
                  </Text>

                  <Text
                    style={{
                      color: "#D4D4D4",
                      fontSize: 11,
                      marginTop: 5,
                    }}
                  >
                    ⭐ {professional.rating} · {professional.jobs}
                  </Text>
                </View>

                <Pressable
                  onPress={() => toggleFavorite(professional.id)}
                  hitSlop={10}
                >
                  <Text style={{ fontSize: 23 }}>
                    {favorites.includes(professional.id) ? "❤️" : "♡"}
                  </Text>
                </Pressable>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 17,
                  paddingTop: 13,
                  borderTopWidth: 1,
                  borderTopColor: "#333333",
                }}
              >
                <View>
                  <Text style={{ color: "#A3A3A3", fontSize: 12 }}>
                    📍 {professional.distance}
                  </Text>

                  <Text
                    style={{
                      color: "#A3E635",
                      fontSize: 12,
                      marginTop: 7,
                    }}
                  >
                    ● Available for booking
                  </Text>
                </View>

                <View style={{ alignItems: "flex-end" }}>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 19,
                      fontWeight: "800",
                    }}
                  >
                    {professional.price}
                  </Text>

                  <Text style={{ color: "#9CA3AF", fontSize: 10 }}>
                    Starting price
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", gap: 10, marginTop: 15 }}>
                <Pressable
                  onPress={() => openCategory("ac-repair")}
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: "#454545",
                    borderRadius: 10,
                    paddingVertical: 12,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                      fontWeight: "600",
                    }}
                  >
                    View Services
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => openCategory("ac-repair")}
                  style={{
                    flex: 1,
                    backgroundColor: "#A3E635",
                    borderRadius: 10,
                    paddingVertical: 12,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#111111",
                      fontSize: 12,
                      fontWeight: "800",
                    }}
                  >
                    Book Now
                  </Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom navigation */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 78,
          backgroundColor: "#191919",
          borderTopWidth: 1,
          borderTopColor: "#333333",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingBottom: 8,
        }}
      >
        {[
          { name: "Explore", icon: "⌂" },
          { name: "Bookings", icon: "▣" },
          { name: "Messages", icon: "✉" },
          { name: "Profile", icon: "♙" },
        ].map((tab) => {
          const selected = activeTab === tab.name;

          return (
            <Pressable
              key={tab.name}
              onPress={() => setActiveTab(tab.name)}
              style={{ alignItems: "center", minWidth: 60 }}
            >
              <Text
                style={{
                  color: selected ? "#A3E635" : "#777777",
                  fontSize: 23,
                }}
              >
                {tab.icon}
              </Text>

              <Text
                style={{
                  color: selected ? "#A3E635" : "#777777",
                  fontSize: 10,
                  fontWeight: selected ? "700" : "400",
                  marginTop: 4,
                }}
              >
                {tab.name}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
