import {
  MdAccessibility,
  MdAccessible,
  MdAssignmentTurnedIn,
  MdChat,
  MdCleaningServices,
  MdCottage,
  MdFavorite,
  MdGroup,
  MdHandshake,
  MdHealthAndSafety,
  MdHome,
  MdLocalHospital,
  MdMedication,
  MdOutlineFavorite,
  MdOutlineSelfImprovement,
  MdPsychology,
  MdRestaurant,
  MdVisibility,
} from "react-icons/md";

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
