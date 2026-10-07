import {
  Wrench,
  Droplets,
  Zap,
  Hammer,
  Scissors,
  CalendarDays,
  ClipboardCheck,
  PhoneCall,
  Heart,
  type LucideIcon,
} from "lucide-react-native";

// --------------------
// Services
// --------------------

export const services: {
  id: string;
  name: string;
  icon: LucideIcon;
}[] = [
  {
    id: "1",
    name: "AC Repair",
    icon: Wrench,
  },
  {
    id: "2",
    name: "Plumber",
    icon: Droplets,
  },
  {
    id: "3",
    name: "Electrician",
    icon: Zap,
  },
  {
    id: "4",
    name: "Carpenter",
    icon: Hammer,
  },
  {
    id: "5",
    name: "Salon",
    icon: Scissors,
  },
];

// --------------------
// Quick Actions
// --------------------

export const quickActions: {
  id: string;
  title: string;
  icon: LucideIcon;
}[] = [
  {
    id: "1",
    title: "Book a Service",
    icon: CalendarDays,
  },
  {
    id: "2",
    title: "My Bookings",
    icon: ClipboardCheck,
  },
  {
    id: "3",
    title: "Emergency Help",
    icon: PhoneCall,
  },
  {
    id: "4",
    title: "Saved Services",
    icon: Heart,
  },
];

// --------------------
// Upcoming Booking
// --------------------

export const upcomingBooking = {
  id: "1",
  service: "AC Repair",
  professional: "Ravi Joshi",
  date: "Tomorrow",
  time: "10:00 AM",
  status: "Confirmed",
};

// --------------------
// Popular Services
// --------------------

export const popularServices = [
  {
    id: "1",
    name: "AC Repair",
    description: "Repair, maintenance & installation",
    price: 499,
    icon: Wrench,
  },
  {
    id: "2",
    name: "Plumber",
    description: "Leaks, pipes & fittings",
    price: 299,
    icon: Droplets,
  },
  {
    id: "3",
    name: "Electrician",
    description: "Wiring, switches & repairs",
    price: 399,
    icon: Zap,
  },
  {
    id: "4",
    name: "Carpenter",
    description: "Furniture & woodwork",
    price: 449,
    icon: Hammer,
  },
];

// --------------------
// Professionals Near You
// --------------------

export const professionals = [
  {
    id: "1",
    name: "Ravi Joshi",
    service: "AC Repair",
    role: "AC Technician",
    rating: 4.5,
    jobs: 547,
    distance: "4.0 km",
    availability: "Available today",
    price: 649,
  },
  {
    id: "2",
    name: "Pradeep Sharma",
    service: "AC Repair",
    role: "AC Technician",
    rating: 4.9,
    jobs: 438,
    distance: "4.4 km",
    availability: "Busy today",
    price: 599,
  },
];