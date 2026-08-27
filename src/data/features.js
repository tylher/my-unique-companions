import {
  MdAccessibility,
  MdAccessible,
  MdAssignmentTurnedIn,
  MdChat,
  MdCleaningServices,
  MdCottage,
  MdDiversity1,
  MdDiversity3,
  MdFamilyRestroom,
  MdFavorite,
  MdFavoriteBorder,
  MdGroup,
  MdHandshake,
  MdHealthAndSafety,
  MdHome,
  MdLocalHospital,
  MdLocationOn,
  MdLogin,
  MdLogout,
  MdLuggage,
  MdMail,
  MdMedicalServices,
  MdMedication,
  MdOutlineFavorite,
  MdOutlineHome,
  MdOutlineSelfImprovement,
  MdPeopleOutline,
  MdPhone,
  MdPsychology,
  MdRecordVoiceOver,
  MdRestaurant,
  MdShield,
  MdSpa,
  MdVerified,
  MdVerifiedUser,
  MdVisibility,
  MdWbSunny,
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
    icon: "/images/icons/compassion.png",
    iconAlt: "Compassion Icon",
    iconBg: "bg-secondary-container/10",
  },
  {
    id: 2,
    title: "Home-Like Environment",
    description:
      "A premium residential environment that prioritizes comfort and safety over clinical routine.",
    icon: "/images/icons/home-like.png",
    iconAlt: "Home-Like Setting Icon",
    iconBg: "bg-primary/5",
  },
  {
    id: 3,
    title: "Dignity & Independence",
    description:
      "Empowering residents to maintain their independence while providing respectful, supportive care.",
    icon: "/images/icons/personalized-care.png",
    iconAlt: "Dignity Icon",
    iconBg: "bg-primary/5",
  },
  {
    id: 4,
    title: "Open Family Communication",
    description:
      "Keeping families informed and involved through transparent communication and regular updates.",
    icon: "/images/icons/family-care.png",
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
    image: "/images/independence.jpg",
  },
  {
    title: "Personalized Care",
    text: "Care plans are tailored to each person’s unique needs, preferences, and health requirements.",
    icon: MdOutlineFavorite,
    image: "/images/personalized-care.jpg",
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
    image: "/images/communication.jpg",
  },
  {
    title: "Holistic Well-being",
    text: "We support physical, emotional, and social wellness through thoughtful, continuous care.",
    icon: MdHealthAndSafety,
    image: "/images/wellbeing.jpg",
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
    quote:
      "We maintain clear communication with families and medical professionals to keep care consistent and reliable.",
    chip: "Safe & Reliable",
    image: "/images/medication-assistance2.jpg",
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
      "Special diets (low sodium, diabetic friendly, soft foods, etc.)",
      "Hydration monitoring",
      "Cultural and personal food preferences",
    ],
    quote:
      "Meals are served in a warm, family style setting that encourages connection and comfort.",
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
    image: "/images/house-keeping.jpg",
  },

  {
    id: "memory-care",
    type: "A",
    icon: FaBrain,
    title:
      "Specialized Memory Care (Dementia, Alzheimer's) and Developmental Disabilities ",
    description:
      "We offer compassionate support for residents living with dementia, Alzheimer’s, and developmental disabilities.",
    bullets: [
      "Structured routines for comfort and stability",
      "Gentle redirection and de escalation techniques",
      "Activities that support memory and engagement",
      "A calm, predictable environment",
      "Caregiver training in dementia specific best practices",
    ],
    quote:
      "Our goal is to help residents feel safe, understood, and emotionally supported",
    chip: "Specialized Care",
    image: "/images/memory.jpg",
  },

  {
    id: "healthcare",
    type: "A",
    icon: FaHeartbeat,
    title: "Coordination with Healthcare Providers",
    description:
      "We partner with families and healthcare professionals to ensure consistent, high-quality care and communication.",
    bullets: [
      "Condition monitoring",
      "Fall prevention practices",
      "Appointment coordination",
      "Communication with nurses, therapists, and physicians",
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
      "Celebrations, holidays, and special moments",
      "Encouraged participation in routines",
    ],
    quote:
      "We create a warm, family like atmosphere where residents feel connected and valued.",
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
      "A supportive, family oriented community",
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
    text: "Consistent daily schedules provide comfort, familiarity, and stability.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Gentle Redirection",
    text: "Compassionate de-escalation techniques help reduce anxiety and confusion.",
  },
  {
    icon: FaClipboardList,
    title: "Meaningful Activities",
    text: "Engaging programs support memory, cognitive stimulation, and social connection.",
  },
  {
    icon: FaShieldAlt,
    title: "Calm Environment",
    text: "A peaceful and predictable setting promotes safety, confidence, and independence.",
  },
  {
    icon: FaUsers,
    title: "Specialized Training",
    text: "Our caregivers receive ongoing education in dementia-specific best practices.",
  },
];

export const dayInTheLife = [
  {
    id: 1,
    icon: MdLogin,
    title: "Start Your Shift",
    description: "A warm greeting and handoff to ensure continuity of care.",
  },
  {
    id: 2,
    icon: MdWbSunny,
    title: "Morning Care",
    description:
      "Assisting residents with their morning routines with patience and dignity.",
  },
  {
    id: 3,
    icon: MdRestaurant,
    title: "Meals & Support",
    description: "Nutritious, home-cooked meals served family-style.",
  },
  {
    id: 4,
    icon: MdDiversity3,
    title: "Activities & Companionship",
    description:
      "Engaging in meaningful moments, from games to quiet conversation.",
  },
  {
    id: 5,
    icon: MdFamilyRestroom,
    title: "Family Updates",
    description:
      "Keeping loved ones connected and informed throughout the day.",
  },
  {
    id: 6,
    icon: MdLogout,
    title: "Heading Home",
    description: "A final check-in and documentation before passing the baton.",
  },
];
export const responsibilities = [
  "Assisting with bathing, dressing, grooming, and mobility",
  "Providing meal assistance and hydration support",
  "Supporting residents with toileting and incontinence care",
  "Offering companionship, conversation, and emotional support",
  "Preparing meals and light housekeeping",
  "Monitoring resident well being and reporting changes",
  "Assisting with medication under state guidelines",
  "Maintaining a safe, calm, and respectful environment",
];

export const qualifications = [
  "Compassionate and patient",
  "Reliable and committed",
  "Respectful and professional",
  "Able to work independently and as part of a team",
  "Comfortable supporting residents with varying needs",
];

export const credentials = [
  "Washington State HCA, CNA, or willingness to obtain certification",
  "CPR/First Aid certification",
  "Nurse delegation",
  "Food handlers permit",
  "Specialty care (Mental health and Dementia)",
  "Background check clearance",
  "TB test",
  "Valid identification and eligibility to work in the U.S.",
];

export const residentRights = [
  {
    icon: MdVerifiedUser,
    title: "Dignity & Respect",
    description:
      "To be treated with unwavering courtesy, maintaining privacy in personal care and communication.",
  },
  {
    icon: MdDiversity1,
    title: "Care Decisions",
    description:
      "To fully participate in planning care and treatments, and to be fully informed of all health status changes.",
  },
  {
    icon: MdMedicalServices,
    title: "Safe Care",
    description:
      "To reside in a physically safe, clean environment free from abuse and neglect.",
  },
  {
    icon: MdRecordVoiceOver,
    title: "Voice Concerns",
    description:
      "To file complaints or voice grievances without fear of discrimination, reprisal, or compromised care.",
  },
  {
    icon: MdLuggage,
    title: "Personal Belongings",
    description:
      "To retain and use personal possessions as space permits, creating a truly personalized living area.",
  },
  {
    icon: MdFamilyRestroom,
    title: "Family Visits",
    description:
      "To receive visitors of their choosing, ensuring enduring connections with family and friends.",
  },
];

export const moveInRequirements = [
  "Medical History and Current Diagnoses",
  "Medication List and Pharmacy Information",
  "Dietary Needs and Preferences",
  "Emergency Contacts",
  "Insurance Information",
  "Physician and Specialist Contacts",
  "Behavioral or Cognitive Notes to Support Care",
];

export const engagementItems = [
  "Resident privacy",
  "Family involvement",
  "Daily routines and care needs",
];

export const contactInterests = [
  "Scheduling a Tour",
  "General Care Inquiry",
  "Pricing & Availability",
  "Careers",
];

export const contactDetails = [
  {
    icon: MdLocationOn,
    title: "Our Residence",
    data: [{
      link: "https://maps.app.goo.gl/qnKaWvPnSoRar22u9",
      text: "710 ROE STREET, STEILACOOM, 98388"
    },]
  },
  {
    icon: MdPhone,
    title: "Phone",
    data: [
      {
        link: "tel:+12533044293",
        text: "(253) 304-4293",
      },
      {
        link: "tel:+14255157787",
        text: "(425) 515-7787",
      },
    ],
    subtitle: "Available 9am - 6pm daily",
  },
  {
    icon: MdMail,
    title: "Email",
    data: [
      {
        link: "mailto:uniquecompanionsafh@gmail.com ",
        text: "uniquecompanionsafh@gmail.com ",
      },
      {
        link: "mailto:info@uniquecompanions.com",
        text: "info@uniquecompanions.com",
      },
    ],
  },
];

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Family Packets", href: "/resources/welcome-packet" },
  { label: "Gallery", href: "/resources/gallery" },
  { label: "Careers", href: "/careers" },
];

export const homeGallery = {
  eyebrow: "TAKE A LOOK INSIDE",
  title: "A Home You'll Love",

  buttonText: "See More",

  images: [
    {
      id: 1,
      alt: "Warm interior living room",
      src: "/images/gallery/living-room-1.jpg",
    },
    {
      id: 2,
      alt: "Cozy bedroom",
      src: "/images/gallery/room-2_2.jpg",
    },
    {
      id: 3,
      alt: "Bright dining area",
      src: "/images/gallery/dining-1.jpg",
    },
    {
      id: 4,
      alt: "Garden patio",
      src: "/images/gallery/office-1.jpg",
      overlayText: "+13 More Photos",
    },
  ],
};

export const promiseData = {
  eyebrow: "OUR PROMISE",

  quote:
    "To provide compassionate, personalized care in a warm and supportive environment where every resident feels safe, respected, and at home.",

  description:
    "We believe that exceptional care goes beyond physical needs. It's about creating meaningful connections, nurturing joy, and honoring the unique life story of every individual we serve.",
};

export const memoryCareData = {
  eyebrow: "SPECIALIST CARE",

  title: "Compassionate Memory Care & Developmental Support",

  description:
    "Our specialized programs are thoughtfully designed to support individuals with memory loss and developmental challenges, focusing on dignity, engagement, and emotional well-being.",

  tags: [
    "Structured Routines",
    "Gentle Redirection",
    "Calm, Predictable Environment",
  ],

  buttonText: "Learn About Memory Care",
};

export const closingCTAData = {
  title: "We care for each person as we would our own family.",

  values: ["Compassion", "Trust", "Respect", "Connection", "Dignity"],

  buttonText: "Schedule a Visit",
};

// data/gallery.js

export const categories = [
  { id: "all", label: "All Spaces" },
  { id: "living", label: "Living Areas" },
  { id: "suites", label: "Private Suites" },
  { id: "gardens", label: "Gardens" },
  { id: "dining", label: "Dining" },
  { id: "walk-way", label: "Walk Way" },
];

// `size` controls the grid treatment on the page:
// "wide"   -> full-width cinematic block (aspect-[21/9] on desktop)
// "large"  -> large asymmetric block (md:col-span-8)
// "small"  -> stacked small block (md:col-span-4, paired two-up)
export const galleryImages = [
  {
    id: 1,
    category: "dining",
    size: "wide", // dining: 1 item → wide fills full row ✓
    title: "Communal Dining",
    alt: "A bright, modern chef's kitchen and communal dining area in a luxury adult family home, with pristine white countertops, soft blue cabinetry, and warm wood accents.",
    src: "/images/gallery/dining-1.jpg",
  },
  {
    id: 2,
    category: "living",
    size: "large", // living row 1: large + small (ids 2,3) → 8+4 ✓
    alt: "A close-up, high-quality shot of a comfortable, premium reading nook bathed in warm afternoon sunlight, with a plush armchair and a wooden side table holding a ceramic teacup.",
    src: "/images/gallery/living-room-1.jpg",
  },
  {
    id: 3,
    category: "living",
    size: "small", // pairs with id 2
    badge: "Wellness Spaces",
    title: "The Activity Lounge",
    alt: "A spacious, meticulously designed wellness and activity center within a premium elder care home, with large windows, polished hardwood floors, and comfortable seating arranged for group activities.",
    src: "/images/gallery/living-room-2.jpg",
  },
  {
    id: 4,
    category: "living",
    size: "large", // suites row 1: large + 2 smalls (ids 4,6,9) → 8+4 ✓
    title: "Private living room Suite",
    alt: "A full view of a spacious private bedroom suite with hotel-quality furnishings, a large window with soft natural light, and a cozy seating area.",
    src: "/images/gallery/living-room-3.jpg",
  },
  {
    id: 17,
    category: "walk-way",
    size: "small", // suites row 1: large + 2 smalls (ids 4,6,9) → 8+4 ✓
    title: "Private living room Suite",
    alt: "A full view of a spacious private bedroom suite with hotel-quality furnishings, a large window with soft natural light, and a cozy seating area.",
    src: "/images/gallery/passage-4.jpg",
  },
  {
    id: 5,
    category: "suites",
    size: "large", // gardens row 1: large + 2 smalls (ids 5,7,10) → 8+4 ✓
    alt: "A peaceful seating area in the garden courtyard, surrounded by flowering plants, designed for quiet conversation and reflection.",
    src: "/images/gallery/room-1_1.jpg",
  },
  {
    id: 6,
    category: "suites",
    size: "small", // pairs with id 4 (small 1 of 2)
    alt: "A bright private suite bathroom with grab bars discreetly integrated into elegant tilework, balancing safety and luxury.",
    src: "/images/gallery/room-1_2.jpg",
  },
  {
    id: 7,
    category: "suites",
    size: "small", // pairs with id 5 (small 1 of 2)
    title: "Comfortable bedroom",
    alt: "Accessible raised garden beds in a courtyard, allowing residents to participate in light gardening activities at a comfortable height.",
    src: "/images/gallery/room-2_1.jpg",
  },
  {
    id: 8,
    category: "suites",
    size: "wide", // living row 2: wide (id 8) → full row ✓
    alt: "A living space",
    src: "/images/gallery/room-2_2.jpg",
  },
  {
    id: 9,
    category: "suites",
    size: "small", // pairs with id 4 (small 2 of 2)
    alt: "A thoughtfully decorated private suite with personal mementos and photographs displayed on a dresser, reflecting individual personality.",
    src: "/images/gallery/room-3_1.jpg",
  },
  {
    id: 10,
    category: "suites",
    size: "small", // pairs with id 5 (small 2 of 2) → gardens done ✓
    alt: "A well lit and furnished place of rest",
    src: "/images/gallery/room-3_2.jpg",
  },
  {
    id: 11,
    category: "suites",
    size: "wide", // suites row 2: wide (id 11) → full row ✓
    title: "Luxury Bathroom",
    alt: "A clean and safe bathroom",
    src: "/images/gallery/restroom-2.jpg",
  },
  {
    id: 12,
    category: "suites",
    size: "large", // suites row 3: large + small (ids 12,14) → 8+4 ✓
    alt: "A thoughtfully decorated private suite with personal mementos and photographs displayed on a dresser, reflecting individual personality.",
    src: "/images/gallery/room-3_3.jpg",
  },
  {
    id: 13,
    category: "walk-way",
    size: "small", // living row 3: large + small… but living has no more smalls
    alt: "A tidy passage to walk on comfortably.", // → need id 13 large + nothing
    src: "/images/gallery/passage-1.jpg", // fix: make wide ↓ see note
  },
  {
    id: 14,
    category: "walk-way",
    size: "small", // living row 3: large + small… but living has no more smalls
    alt: "A tidy passage to walk on comfortably.", // → need id 13 large + nothing
    src: "/images/gallery/passage-3.jpg", // fix: make wide ↓ see note
  },
  {
    id: 15,
    category: "suites",
    size: "small", // pairs with id 12 → suites done ✓
    title: "Accessible Restroom",
    alt: "A clean and safe bathroom",
    src: "/images/gallery/restroom-1.jpg",
  },
  {
    id: 18,
    category: "walk-way",
    size: "small", // pairs with id 12 → suites done ✓
    title: "Accessible Passage area",
    alt: "A clean and safe passage area",
    src: "/images/gallery/passage-5.jpg",
  },
 
];
export const trainingItems = [
  "Dementia specific care",
  "Mental health awareness",
  "De escalation and safety techniques",
  "Washington State home care compliance standards",
  "Medication assistance procedures",
  "Client rights, confidentiality, and professional conduct",
];

export const commitmentCards = [
  {
    id: 1,
    icon: MdFavorite,
    label: "Dignity in Care",
  },
  {
    id: 2,
    icon: MdShield,
    label: "Unwavering Safety",
  },
  {
    id: 3,
    icon: MdGroup,
    label: "Community First",
  },
  {
    id: 4,
    icon: MdSpa,
    label: "Holistic Wellness",
  },
  {
    id: 5,
    icon: MdHandshake,
    label: "Transparent Communication",
  },
];
