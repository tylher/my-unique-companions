import {
  MdAccessibility,
  MdAccessible,
  MdAssignmentTurnedIn,
  MdChat,
  MdCleaningServices,
  MdCottage,
  MdFavorite,
  MdFavoriteBorder,
  MdGroup,
  MdHandshake,
  MdHealthAndSafety,
  MdHome,
  MdLocalHospital,
  MdMedication,
  MdOutlineFavorite,
  MdOutlineHome,
  MdOutlineSelfImprovement,
  MdPeopleOutline,
  MdPsychology,
  MdRestaurant,
  MdVerified,
  MdVisibility,
} from "react-icons/md";

import {
  FaBrain,
  FaBroom,
  FaClipboardList,
  FaHandHoldingHeart,
  FaHeartbeat,
  FaHome,
  FaPills,
  FaShieldAlt,
  FaUsers,
  FaUtensils,
  FaWalking,
} from "react-icons/fa";

import { IoHeart } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

export const features = [
  {
    id: 1,
    title: "Compassionate Personalized Care",
    description:
      "Our team is dedicated to providing care with genuine heart and professional excellence, tailored to unique needs.",
    icon: "https://lh3.googleusercontent.com/aida/AP1WRLsBflAzjWhx-E33bwJmbJSG6YkJr2dB_kKr-fAMi3VqjX6uPNnwbr-4vNTwi3Pp8117X0lVbxAoXoMaZg-N8jKPw3d6uetWTCggNd53rE99w2T_iub_yRTgG1ERbyG17K8oQ0ZNI_klEaG5hJkrRcmngfNfjV-5IiroL34a3hrQOvj74azJ-oGiOocjLCoydt_YLFxz1XtQjrCcL6zW-UQQVt4OTQefmjE1LNX6bLf0kYEwHSH16uVP_1g",
    iconAlt: "Compassion Icon",
    iconBg: "bg-secondary-container/10",
  },
  {
    id: 2,
    title: "Home-Like Environment",
    description:
      "A premium residential environment that prioritizes comfort and safety over clinical routine.",
    icon: "https://lh3.googleusercontent.com/aida/AP1WRLuaYoFkXC2e-xgA8MCwEk-gcJANv31vDpo5TaQBsBV1-892ERWDiaRHlTWeW8G-LxqvvwTRkY1ahpOEd8UnbYtHhZhNABj7GSojMWNo5-KbhliaQAAzBIg7Gga8_wERlYdzCTiEd7JEcujtQJWS-_K0viW6ID7Wu4fieADXYFkE2eFhvNXad7cyhxF7PA8l6M8xmZt_ojGDwrJL3uaepDLgw_BJIe56RD-azJa-X9iJgs77EvC8Qakn36r_",
    iconAlt: "Home-Like Setting Icon",
    iconBg: "bg-primary/5",
  },
  {
    id: 3,
    title: "Dignity & Independence",
    description:
      "Empowering residents to maintain their independence while providing respectful, supportive care.",
    icon: "https://lh3.googleusercontent.com/aida/AP1WRLsqbLUXMNlH8f2FOZD1qE8xiGejmYkof6i868MYdDq2j-JQ-xDefGjW6geELyU6dQ1xRc8wGUVIsCf4Xt69DklAHFA4_rhB8BBbmCB_EyLn4ws4j3vDW7IkbR_mNhGTcw0T9kLf078NHmf_e53uNaME8Ws8BiybAzFLDbCIJTUQrDD868bCb9PFhSDOax2BkPWYcIJE2AkN3ZiSec-NE-5QH1_-8oqcPxK0AWJPWgN7dSNwQQWJrSxJP8i4",
    iconAlt: "Dignity Icon",
    iconBg: "bg-primary/5",
  },
  {
    id: 4,
    title: "Open Family Communication",
    description:
      "Keeping families informed and involved through transparent communication and regular updates.",
    icon: "https://lh3.googleusercontent.com/aida/AP1WRLujfdgVLx9V1YJOB5lBRMOpvgAuH0OKhdcTU8nnJlpk2tyGCpFZwkelJSvtI7tugSl9K6LLOvC7uT0xrlFiKRIhkvI3g10m-gEWjc1VUGwy5CY5bNOTUn0R2eVflOQ79oNrtuckblRClAUa_n1uXDmzVTNzcYCcCSPsfaIM3p5UKTkpKi-1EIP_RUEyGzuPBmEda-zjQUiYpFdz4Cl4C9RffKhBR0Fz73u1gyUrv2YBxY7ow75QnmjfwHk",
    iconAlt: "Family Communication Icon",
    iconBg: "bg-primary/5",
  },
];

export const familyExpectations = [
  {
    id: 1,
    title: "Home-Like Living",
    description:
      "A peaceful, comfortable environment where residents feel at ease, surrounded by familiar comforts.",
    icon: MdCottage,
  },
  {
    id: 2,
    title: "Consistent Caregivers",
    description:
      "Dedicated professionals who truly get to know your loved one, fostering deep, trusting relationships.",
    icon: MdGroup,
  },
  {
    id: 3,
    title: "Personalized Care Plans",
    description:
      "Tailored support that evolves with your family's needs, ensuring optimal health and well-being.",
    icon: MdAssignmentTurnedIn,
  },
];

export const pillars = [
  {
    id: 1,
    title: "Dignity",
    description:
      "We honor the life experiences and individuality of every resident, treating them with the utmost respect in every interaction.",
    icon: IoHeart,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    offset: false,
  },
  {
    id: 2,
    title: "Independence",
    description:
      "We encourage and support autonomy, empowering our residents to make choices and engage in activities they love.",
    icon: MdAccessibility,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    offset: true,
  },
  {
    id: 3,
    title: "Respect",
    description:
      "A culture of mutual respect permeates our home, fostering a secure and harmonious environment for staff and residents alike.",
    icon: MdHandshake,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    offset: false,
  },
  {
    id: 4,
    title: "Connection",
    description:
      "We build strong, meaningful relationships, ensuring no one ever feels isolated. We are a family, first and foremost.",
    icon: LuUsers,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    offset: true,
  },
];

export const services = [
  {
    title: "Activities of Daily Living",
    description:
      "Assistance with personal daily routines while preserving dignity and independence.",
    icon: MdOutlineSelfImprovement,
  },
  {
    title: "Medication Assistance",
    description:
      "Support with medication administration as permitted by law and care plans.",
    icon: MdMedication,
  },
  {
    title: "Memory Care",
    description:
      "Specialized support for dementia and Alzheimer’s in a safe, structured environment.",
    icon: MdPsychology,
  },
  {
    title: "Developmental Support",
    description:
      "Care tailored for individuals with developmental disabilities to encourage growth and comfort.",
    icon: MdAccessible,
  },
  {
    title: "Nutrition & Meals",
    description:
      "Balanced meal preparation designed to meet health and dietary needs.",
    icon: MdRestaurant,
  },
  {
    title: "Social Engagement",
    description:
      "Recreational and emotional support that promotes joy and connection.",
    icon: MdFavorite,
  },
  {
    title: "Healthcare Coordination",
    description:
      "Seamless communication with healthcare providers and families.",
    icon: MdLocalHospital,
  },
  {
    title: "Supervision & Safety",
    description:
      "Continuous monitoring to ensure resident safety and peace of mind.",
    icon: MdVisibility,
  },
  {
    title: "Housekeeping Support",
    description:
      "Clean, organized living spaces through laundry and housekeeping services.",
    icon: MdCleaningServices,
  },
];

export const philosophy = [
  {
    title: "Dignity and Independence",
    text: "We honor every resident’s individuality by encouraging autonomy while providing respectful support in daily living.",
    icon: MdOutlineSelfImprovement,
    image:
      "https://images.unsplash.com/photo-1520975922284-9b0e6fefc6a1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Personalized Care",
    text: "Care plans are tailored to each person’s unique needs, preferences, and health requirements.",
    icon: MdOutlineFavorite,
    image:
      "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Warm Home Environment",
    text: "We create a comforting, home-like space that promotes belonging, safety, and peace of mind.",
    icon: MdHome,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Open Communication",
    text: "We maintain transparent and ongoing communication with families and care partners.",
    icon: MdChat,
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Holistic Well-being",
    text: "We support physical, emotional, and social wellness through thoughtful, continuous care.",
    icon: MdHealthAndSafety,
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80",
  },
];

export const statements = [
  {
    title: "A warm, welcoming environment from the moment you arrive.",
    description:
      "Every corner of our home is designed with comfort in mind — familiar, calm, and filled with natural light. This is not a facility. It is a home.",
  },
  {
    title: "Your routines, preferences, and rituals — respected always.",
    description:
      "Morning coffee a certain way. An afternoon programme you love. We build our days around yours, not the other way around.",
  },
  {
    title: "Meaningful activities that bring purpose and joy.",
    description:
      "From social gatherings to quiet creative moments, we offer opportunities for residents to feel engaged, stimulated, and genuinely alive.",
  },
  {
    title: "Genuine connection — with caregivers and fellow residents.",
    description:
      "Relationships are at the heart of who we are. We foster a community where everyone looks out for one another — staff and residents alike.",
  },
  {
    title: "A true sense of community and belonging.",
    description:
      "No one should feel alone. At Unique Companions, every resident is known by name, by story, and by the things that make them uniquely themselves.",
  },
];

export const visionPillars = [
  {
    title: "High-Quality Support",
    description:
      "Delivering consistent, compassionate, and dependable care that residents and families can trust.",
    icon: MdVerified,
  },
  {
    title: "Meaningful Relationships",
    description:
      "Building genuine connections with residents, families, and care partners through openness and trust.",
    icon: MdPeopleOutline,
  },
  {
    title: "A Home-Like Environment",
    description:
      "Creating a peaceful, welcoming space where comfort, familiarity, and belonging are part of everyday life.",
    icon: MdOutlineHome,
  },
  {
    title: "Dignity & Confidence",
    description:
      "Empowering residents to live with independence, purpose, and confidence regardless of age or ability.",
    icon: MdFavoriteBorder,
  },
];

export const servicesPageSections = [
  {
    type: "service",
    serviceId: "daily-living",
  },
  {
    type: "service",
    serviceId: "medication",
  },
  {
    type: "service",
    serviceId: "meals",
  },
  {
    type: "service",
    serviceId: "housekeeping",
  },

  {
    type: "special",
    component: "memory-care",
  },

  {
    type: "service",
    serviceId: "healthcare",
  },
  {
    type: "service",
    serviceId: "activities",
  },
  {
    type: "service",
    serviceId: "safety",
  },

  {
    type: "special",
    component: "timeline",
  },

  {
    type: "special",
    component: "stats",
  },

  {
    type: "special",
    component: "cta",
  },
];

export const detailedServices = [
  {
    id: "daily-living",
    type: "A",
    icon: FaWalking,
    title: "Assistance with Activities of Daily Living",
    description:
      "We assist residents with everyday tasks while encouraging independence whenever possible. Our caregivers provide gentle, respectful support with dignity at the center of care.",
    bullets: [
      "Bathing, dressing, and grooming",
      "Mobility and transfers",
      "Toileting and incontinence care",
      "Meal assistance and hydration support",
      "Morning and bedtime routines",
    ],
    quote:
      "Every resident receives care that honors their preferences, comfort level, and personal dignity.",
    chip: "Independence First",
    image: "/images/assisted.jpg",
  },

  {
    id: "medication",
    type: "B",
    icon: FaPills,
    title: "Medication Assistance (as permitted by law)",
    description:
      "Our trained caregivers follow Washington State guidelines to ensure safe and accurate medication support while maintaining clear communication with families and healthcare providers.",
    bullets: [
      "Medication reminders",
      "Assistance with self-administration",
      "Pharmacy and provider coordination",
      "Monitoring for changes in condition",
    ],
    badges: ["WA State Compliant", "Family Notified", "Pharmacy Coordinated"],
    quote: "Consistent, safe, and always communicated clearly.",
    chip: "Safe & Reliable",
    image: "/images/medical-partnership.jpg",
  },

  {
    id: "meals",
    type: "A",
    icon: FaUtensils,
    title: "Meal Preparation & Nutrition Support",
    description:
      "We prepare fresh, balanced meals tailored to dietary needs and personal preferences in a warm, family-style environment.",
    bullets: [
      "Home-cooked meals and snacks",
      "Special diets (diabetic, low-sodium, soft foods)",
      "Hydration monitoring",
      "Cultural and personal preferences",
    ],
    quote: "Meals served family-style — because food is connection.",
    chip: "Home-Cooked Daily",
    image: "/images/home-cooked.jpg",
  },

  {
    id: "housekeeping",
    type: "B",
    icon: FaBroom,
    title: "Housekeeping & Laundry Services",
    description:
      "We maintain a clean, safe, and peaceful home environment so residents can focus on comfort and well-being.",
    bullets: [
      "Daily tidying and sanitation",
      "Weekly housekeeping",
      "Personal laundry and linens",
      "Organized living spaces",
    ],
    quote: "Residents live freely — without the weight of household chores.",
    chip: "Clean · Safe · Peaceful",
    image: "/images/houseKeeping.jpg",
  },

  {
    id: "memory-care",
    type: "A",
    icon: FaBrain,
    title: "Specialized Memory Care & Developmental Support",
    description:
      "We support residents living with dementia, Alzheimer’s, and developmental disabilities in a calm, structured and compassionate environment.",
    bullets: [
      "Structured routines for stability",
      "Gentle redirection techniques",
      "Memory-support activities",
      "Calm predictable environment",
      "Specialized caregiver training",
    ],
    quote:
      "Our goal is to help every resident feel safe, understood, and at peace.",
    chip: "Specialized Care",
    image: "/images/memory.jpg",
  },

  {
    id: "healthcare",
    type: "B",
    icon: FaHeartbeat,
    title: "Coordination with Healthcare Providers",
    description:
      "We partner with families and healthcare professionals to ensure consistent, high-quality care and communication.",
    bullets: [
      "Condition monitoring",
      "Fall prevention practices",
      "Appointment coordination",
      "Provider communication",
      "Care transition support",
    ],
    quote:
      "We act as partners — not just caregivers — in your loved one's health.",
    chip: "Family Always Informed",
    image: "/images/healthcare2.jpg",
  },

  {
    id: "activities",
    type: "B",
    icon: FaUsers,
    title: "Social & Recreational Activities",
    description:
      "We promote emotional well-being through meaningful engagement, companionship, and joyful daily interaction.",
    bullets: [
      "One-on-one companionship",
      "Light hobbies and activities",
      "Social interaction and conversation",
      "Celebrations and events",
      "Encouraged participation in routines",
    ],
    quote: "Emotional well-being is just as important as physical care.",
    chip: "Community & Companionship",
    image: "/images/recreation1.jpg",
  },

  {
    id: "safety",
    type: "A",
    icon: FaHome,
    title: "A Safe, Comfortable Home Environment",
    description:
      "Our home is designed to provide safety, dignity, and comfort in a peaceful and welcoming environment.",
    bullets: [
      "Peaceful home atmosphere",
      "Private or semi-private rooms",
      "Safe indoor/outdoor spaces",
      "Family-oriented community",
    ],
    quote:
      "Everything we do is centered on comfort, dignity, and quality of life.",
    chip: "Home-Like Living",
    image: "/images/safe.jpg",
  },
];

export const memoryCareItems = [
  {
    icon: FaBrain,
    title: "Structured Routines",
    text: "Predictable daily schedules help residents feel secure.",
  },
  {
    icon: FaShieldAlt,
    title: "Safe Environment",
    text: "Designed to reduce confusion and support independence.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Compassionate Support",
    text: "Patience, dignity and understanding guide every interaction.",
  },
  {
    icon: FaUsers,
    title: "Family Partnership",
    text: "Families remain involved throughout the care journey.",
  },
  {
    icon: FaClipboardList,
    title: "Individualized Plans",
    text: "Care strategies tailored to each resident's needs.",
  },
];
