import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";

import { useLocalSearchParams, useRouter } from "expo-router";

import {
  Wrench,
  Droplets,
  Zap,
  Hammer,
  Scissors,
  CalendarDays,
  CheckCircle,
  Phone,
  Heart,
  Search,
  Bell,
  User,
  MapPin,
  Clock,
  Star,
  Home as HomeIcon,
  BriefcaseBusiness,
} from "lucide-react-native";

import {
  services,
  quickActions,
  upcomingBooking,
  popularServices,
  professionals,
} from "../data";

import BottomNav from "@/components/BottomNav";
import { SafeAreaView } from "react-native-safe-area-context";


// ============================================================
// HOME PAGE
// ============================================================

export default function Home() {

  // ----------------------------------------------------------
  // Router
  // ----------------------------------------------------------
  // We use expo-router for navigation.
  //
  // Later, when your teammates create their screens/routes,
  // these paths will connect directly to those screens.
  // ----------------------------------------------------------

  const router = useRouter();


  // ----------------------------------------------------------
  // LOCATION
  // ----------------------------------------------------------
  // The location should NOT be hardcoded here.
  //
  // Your location-selection page can navigate to Home like:
  //
  // router.replace({
  //   pathname: "/",
  //   params: {
  //     location: "Silver Oak Apartments, Saket"
  //   }
  // });
  //
  // Later you can replace this with Context/Zustand/etc.
  // without changing the Home UI.
  // ----------------------------------------------------------

  const params = useLocalSearchParams<{
    location?: string | string[];
  }>();

  const selectedLocation =
    typeof params.location === "string"
      ? params.location
      : "Select your location";


  // ==========================================================
  // NAVIGATION FUNCTIONS
  // ==========================================================

  // ----------------------------------------------------------
  // Search
  // ----------------------------------------------------------

  const handleSearch = () => {
    router.push("/marketplace");
  };


  // ----------------------------------------------------------
  // Quick Actions
  // ----------------------------------------------------------

  const handleQuickAction = (title: string) => {

    switch (title) {

      case "Book a Service":
        router.push("/book-service");
        break;

      case "My Bookings":
        router.push("/bookings");
        break;

      case "Emergency Help":
        router.push("/emergency");
        break;

      case "Saved Services":
        router.push("/saved-services");
        break;

      default:
        break;
    }
  };


  // ----------------------------------------------------------
  // Upcoming Booking Details
  // ----------------------------------------------------------

  const handleBookingDetails = () => {

    router.push({
      pathname: "/booking-details",
      params: {
        bookingId: upcomingBooking.id,
      },
    });
  };


  // ----------------------------------------------------------
  // See All Services
  // ----------------------------------------------------------

  const handleSeeAllServices = () => {
    router.push("/marketplace");
  };


  // ----------------------------------------------------------
  // Popular Service → Book Now
  // ----------------------------------------------------------

  const handleBookService = (service: any) => {

    router.push({
      pathname: "/book-service",
      params: {
        serviceId: service.id,
        serviceName: service.name,
      },
    });
  };


  // ----------------------------------------------------------
  // Professional Profile
  // ----------------------------------------------------------

  const handleProfessionalProfile = (professional: any) => {

    router.push({
      pathname: "/professional-profile",
      params: {
        professionalId: professional.id,
      },
    });
  };


  // ----------------------------------------------------------
  // Professional → Book Now
  // ----------------------------------------------------------

  const handleBookProfessional = (professional: any) => {

    router.push({
      pathname: "/book-service",
      params: {
        professionalId: professional.id,
        professionalName: professional.name,
        serviceName: professional.service,
      },
    });
  };


  // ==========================================================
  // SERVICE ICON
  // ==========================================================

  const getServiceIcon = (serviceName: string) => {

    switch (serviceName) {

      case "AC Repair":
        return Wrench;

      case "Plumber":
        return Droplets;

      case "Electrician":
        return Zap;

      case "Carpenter":
        return Hammer;

      case "Salon":
        return Scissors;

      default:
        return Wrench;
    }
  };


  // ==========================================================
  // QUICK ACTION ICON
  // ==========================================================

  const getQuickActionIcon = (title: string) => {

    switch (title) {

      case "Book a Service":
        return CalendarDays;

      case "My Bookings":
        return CheckCircle;

      case "Emergency Help":
        return Phone;

      case "Saved Services":
        return Heart;

      default:
        return CalendarDays;
    }
  };


  // ==========================================================
  // UI
  // ==========================================================

  return (
    <View className="flex-1 bg-white">
    <ScrollView
      className="flex-1"
      contentContainerClassName="px-5 pt-14 pb-10"
      showsVerticalScrollIndicator={false}
    >

      {/* =====================================================
          HEADER
      ====================================================== */}

      <View className="flex-row items-center justify-between">

        {/* Greeting + Location */}

        <View className="flex-1">

          <Text className="text-xl font-bold text-black">
            Good morning 👋
          </Text>

          <View className="mt-1 flex-row items-center">

            <MapPin
              size={16}
              color="#737373"
            />

            <Text
              className="ml-1 text-sm text-gray-500"
              numberOfLines={1}
            >
              {selectedLocation}
            </Text>

          </View>

        </View>


        {/* Header Icons */}

        <View className="flex-row items-center gap-4">

          {/* Notification */}

          <Pressable
            onPress={() => router.push("/notifications")}
            className="active:opacity-60"
          >
            <Bell
              size={25}
              color="black"
            />
          </Pressable>


          {/* Profile */}

          <Pressable
            onPress={() => router.push("/profile")}
            className="active:opacity-60"
          >
            <User
              size={25}
              color="black"
            />
          </Pressable>

        </View>

      </View>


      {/* =====================================================
          MAIN QUESTION
      ====================================================== */}

      <Text className="mt-7 text-2xl font-bold text-black">
        What do you need help with?
      </Text>


      {/* =====================================================
          SEARCH BAR
      ====================================================== */}

      <Pressable
        onPress={handleSearch}
        className="mt-5 flex-row items-center rounded-2xl border border-gray-200 bg-gray-100 px-4 py-4 active:opacity-70"
      >

        <Search
          size={22}
          color="#737373"
        />

        <Text className="ml-3 text-base text-gray-400">
          Search for a service...
        </Text>

      </Pressable>


      {/* =====================================================
          QUICK ACTIONS
      ====================================================== */}

      <View className="mt-7">

        <Text className="mb-4 text-lg font-bold text-black">
          Quick Actions
        </Text>


        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >

          <View className="flex-row gap-3">

            {quickActions.map((action) => {

              const Icon = getQuickActionIcon(action.title);

              return (

                <Pressable
                  key={action.id}
                  onPress={() => handleQuickAction(action.title)}
                  className="h-24 w-32 items-center justify-center rounded-xl border border-gray-200 bg-white active:bg-gray-100"
                >

                  <Icon
                    size={23}
                    color="black"
                  />

                  <Text
                    className="mt-2 text-center text-sm font-medium text-black"
                    numberOfLines={2}
                  >
                    {action.title}
                  </Text>

                </Pressable>

              );

            })}

          </View>

        </ScrollView>

      </View>


      {/* =====================================================
          UPCOMING BOOKING
      ====================================================== */}

      <View className="mt-8">

        <Text className="mb-4 text-lg font-bold text-black">
          Upcoming Booking
        </Text>


        <View className="rounded-2xl border border-gray-200 bg-white p-4">

          {/* Booking Header */}

          <View className="flex-row items-center justify-between">

            <View>

              <Text className="text-lg font-bold text-black">
                {upcomingBooking.service}
              </Text>

              <Text className="mt-1 text-sm text-gray-500">
                {upcomingBooking.professional}
              </Text>

            </View>


            {/* Status */}

            <View className="rounded-full bg-green-100 px-3 py-1">

              <Text className="text-xs font-semibold text-green-700">
                {upcomingBooking.status}
              </Text>

            </View>

          </View>


          {/* Date + Time */}

          <View className="mt-4 flex-row items-center">

            <Clock
              size={17}
              color="#737373"
            />

            <Text className="ml-2 text-sm text-gray-500">

              {upcomingBooking.date},{" "}
              {upcomingBooking.time}

            </Text>

          </View>


          {/* View Details */}

          <Pressable
            onPress={handleBookingDetails}
            className="mt-4 items-center rounded-xl border border-gray-200 py-3 active:bg-gray-100"
          >

            <Text className="font-semibold text-black">
              View Details
            </Text>

          </Pressable>

        </View>

      </View>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <View className="mt-8">

        {/* Heading */}

        <View className="mb-4 flex-row items-center justify-between">

          <Text className="text-lg font-bold text-black">
            Services
          </Text>

          <Pressable
            onPress={handleSeeAllServices}
            className="active:opacity-60"
          >

            <Text className="text-sm font-semibold text-blue-600">
              See All
            </Text>

          </Pressable>

        </View>


        {/* Services Horizontal List */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >

          <View className="flex-row gap-5">

            {services.map((service) => {

              const Icon = getServiceIcon(service.name);

              return (

                <Pressable
                  key={service.id}
                  onPress={() =>
                    handleBookService(service)
                  }
                  className="w-20 items-center active:opacity-60"
                >

                  {/* Icon Circle */}

                  <View className="h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-gray-100">

                    <Icon
                      size={25}
                      color="black"
                    />

                  </View>


                  {/* Service Name */}

                  <Text
                    className="mt-2 text-center text-xs font-semibold text-black"
                    numberOfLines={2}
                  >
                    {service.name}
                  </Text>

                </Pressable>

              );

            })}

          </View>

        </ScrollView>

      </View>


      {/* =====================================================
          POPULAR SERVICES
      ====================================================== */}

      <View className="mt-8">

        {/* Heading */}

        <View className="mb-4 flex-row items-center justify-between">

          <Text className="text-lg font-bold text-black">
            Popular Services
          </Text>

          <Pressable
            onPress={handleSeeAllServices}
            className="active:opacity-60"
          >

            <Text className="text-sm font-semibold text-blue-600">
              See All
            </Text>

          </Pressable>

        </View>


        {/* Popular Services Horizontal Cards */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >

          <View className="flex-row gap-4">

            {popularServices.map((service) => {

              const Icon = service.icon;

              return (

                <View
                  key={service.id}
                  className="w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white"
                >

                  {/* =================================================
                      SERVICE ICON AREA
                  ================================================== */}

                  <View className="h-32 items-center justify-center bg-gray-100">

                    <Icon
                      size={42}
                      color="#737373"
                    />

                  </View>


                  {/* =================================================
                      SERVICE INFORMATION
                  ================================================== */}

                  <View className="p-4">

                    <Text className="text-lg font-bold text-black">
                      {service.name}
                    </Text>


                    <Text className="mt-1 text-sm leading-5 text-gray-500">
                      {service.description}
                    </Text>


                    {/* Price + Book Now */}

                    <View className="mt-5 flex-row items-center justify-between">

                      <Text className="text-sm text-gray-500">

                        From{" "}

                        <Text className="font-bold text-black">
                          ₹{service.price}
                        </Text>

                      </Text>


                      <Pressable
                        onPress={() =>
                          handleBookService(service)
                        }
                        className="rounded-xl bg-black px-4 py-3 active:opacity-70"
                      >

                        <Text className="font-semibold text-white">
                          Book Now
                        </Text>

                      </Pressable>

                    </View>

                  </View>

                </View>

              );

            })}

          </View>

        </ScrollView>

      </View>


      {/* =====================================================
          PROFESSIONALS NEAR YOU
      ====================================================== */}

      <View className="mt-8">

        {/* Heading */}

        <View className="mb-4 flex-row items-center justify-between">

          <Text className="text-lg font-bold text-black">
            Professionals Near You
          </Text>

          <Pressable
            onPress={() => router.push("/professionals")}
            className="active:opacity-60"
          >

            <Text className="text-sm font-semibold text-gray-500">
              See all
            </Text>

          </Pressable>

        </View>


        {/* Professional Cards */}

        <View className="gap-4">

          {professionals.map((professional) => (

            <View
              key={professional.id}
              className="rounded-2xl border border-gray-200 bg-white p-4"
            >

              {/* =================================================
                  PROFESSIONAL TOP SECTION
              ================================================== */}

              <View className="flex-row items-center">

                {/* Avatar */}

                <View className="h-14 w-14 items-center justify-center rounded-full bg-gray-100">

                  <Text className="text-lg font-bold text-gray-500">

                    {professional.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}

                  </Text>

                </View>


                {/* Name + Role */}

                <View className="ml-4 flex-1">

                  <Text className="text-base font-bold text-black">
                    {professional.name}
                  </Text>

                  <Text className="mt-1 text-sm text-gray-500">
                    {professional.service} · {professional.role}
                  </Text>

                </View>


                {/* Rating */}

                <View className="flex-row items-center">

                  <Star
                    size={17}
                    color="#FACC15"
                    fill="#FACC15"
                  />

                  <Text className="ml-1 font-semibold text-black">
                    {professional.rating}
                  </Text>

                </View>

              </View>


              {/* =================================================
                  PROFESSIONAL STATS
              ================================================== */}

              <View className="mt-3 flex-row items-center">

                <Text className="text-sm text-gray-500">
                  {professional.jobs} jobs
                </Text>

                <Text className="mx-2 text-gray-400">
                  •
                </Text>

                <Text className="text-sm text-gray-500">
                  {professional.distance} away
                </Text>

              </View>


              {/* =================================================
                  AVAILABILITY + PRICE
              ================================================== */}

              <View className="mt-3 flex-row items-center justify-between">

                {/* Availability */}

                <View className="rounded-full bg-green-100 px-3 py-1">

                  <Text className="text-xs font-semibold text-green-700">
                    {professional.availability}
                  </Text>

                </View>


                {/* Price */}

                <Text className="font-bold text-black">
                  From ₹{professional.price}
                </Text>

              </View>


              {/* =================================================
                  PROFESSIONAL ACTION BUTTONS
              ================================================== */}

              <View className="mt-4 flex-row gap-3">

                {/* View Profile */}

                <Pressable
                  onPress={() =>
                    handleProfessionalProfile(professional)
                  }
                  className="flex-1 items-center rounded-xl border border-gray-200 py-3 active:bg-gray-100"
                >

                  <Text className="font-semibold text-black">
                    View Profile
                  </Text>

                </Pressable>


                {/* Book Now */}

                <Pressable
                  onPress={() =>
                    handleBookProfessional(professional)
                  }
                  className="flex-1 items-center rounded-xl bg-black py-3 active:opacity-70"
                >

                  <Text className="font-semibold text-white">
                    Book Now
                  </Text>

                </Pressable>

              </View>

            </View>

          ))}

        </View>

      </View>
    </ScrollView>
    <BottomNav/>
    </View>
  );
}