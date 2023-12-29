import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const PROJECT_DATA_WEBSITE = [
  {
    id: 1,
    title: "Web KuyTravel",
    description: "ReactJS, Tailwind CSS, NextJS",
    src: "/project/KuyTravel.png",
    link: "https://kuy-travel.vercel.app/",
  },

  {
    id: 3,
    title: "Frontend Digital CV",
    description: "ReactJS, Tailwind CSS",
    src: "/project/DigitalCv.png",
    link: "https://digitalcv.id/id/candidate/index.php",
  },
  {
    id: 4,
    title: "Company Profile Gestalt Systech",
    description: "ReactJS, Tailwind CSS",
    src: "/project/GestaltSystech.png",
    link: "https://gestaltsystech.vercel.app/",
  },
  {
    id: 5,
    title: "GPT-3 Clone ReactJS",
    description: "ReactJS, Tailwind CSS",
    src: "/project/gpt3.png",
    link: "https://github.com/abdillahmufki/Modern-UI-UX-Website-in-React-JS",
  },
  {
    id: 6,
    title: "Company Profile PT. Buana Selaras Berjaya",
    description: "ReactJS, Tailwind CSS",
    src: "/project/Bsb.png",
    link: "http://buanaselarasberjaya.com/",
  },
  {
    id: 7,
    title: "KuyNgemils",
    description: "ReactJS, Tailwind CSS",
    src: "/project/foodorderapp.png",
    link: "https://foodorderapp-delta.vercel.app/",
  },
  {
    id: 9,
    title: "Web Bolabol",
    description: "Laravel Blade",
    src: "/project/bolabol.jpg",
    link: "https://github.com/abdillahmufki/Bolabol",
  },
  {
    id: 10,
    title: "Management Kecamatan",
    description: "Laravel Blade",
    src: "/project/kecamatan1.jpg",
    link: "https://github.com/abdillahmufki/Project-Uas-Management-kecamatan",
  },
];

export const PROJECT_DATA_APPLICATION = [
  {
    id: 2,
    title: "Mobile Apps Find Job",
    description:
      "This innovative solution combines a user-friendly interface with seamless functionality, offering a modern platform for those seeking their dream career. Explore my portfolio to see how React Native Expo is driving the development of dynamic job search apps, making a big impact in mobile development.",
    src: "/project/mobileReactNative.png",
    link: "https://github.com/abdillahmufki/Job_Portal_RN",
  },
];

export const PROJECT_DATA_DESIGN = [
  {
    id: 1,
    title: "User Interface HealingKuy",
    description: "UI about booking a place to stay using Figma.",
    src: "/project/HealingKuy.jpg",
    link: "https://www.figma.com/file/oQblEaGpy4ncgr6nNy2u9O/Staycation?type=design&node-id=0%3A1&mode=design&t=AvzRJYbMGD2a8ses-1",
  },
  {
    id: 2,
    title: "User Interface Smart Parking",
    description:
      "UI Admin Smart Parking, my project which manages parking data based on smart parking, using Figma tool.",
    src: "/project/ui_diagram.png",
    link: "https://www.figma.com/file/Sy244en5iDel78FRxqfYlv/Arkom?type=design&mode=design&t=AvzRJYbMGD2a8ses-1",
  },
];

export const NAVBAR_LIST = [
  { title: "Home", href: "/" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Qualification", href: "#qualification" },
  { title: "Services", href: "#services" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Blog", href: "#blog" },
  { title: "Contact", href: "#contact" },
];

export const ICON_HERO = [
  {
    href: "https://www.linkedin.com/in/abdillah-mufki-auzan-mubin-55a873212/",

    icon: faLinkedin,
  },
  {
    href: "https://github.com/abdillahmufki",

    icon: faGithub,
  },
  {
    href: "https://www.instagram.com/mufkimustache/",

    icon: faInstagram,
  },
];

export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

export const ICON_DATA_TECH = [
  {
    src: "/icon/html.svg",
    alt: "HTML",
  },
  {
    src: "/icon/css.svg",
    alt: "CSS",
  },
  {
    src: "/icon/js.svg",
    alt: "JavaScript",
  },
  {
    src: "/icon/react.svg",
    alt: "React",
    className: "lg:animate-spin animate-bounce",
  },
  {
    src: "/icon/nextjs-solid.svg",
    alt: "Next.js",
  },
  {
    src: "/icon/tailwindcss.svg",
    alt: "Tailwind CSS",
  },
];

// data.ts
export interface Progress {
  title: string;
  value: number;
}

export const PROGRESS_VALUES_FRONTEND: Progress[] = [
  { title: "HTML", value: 85 },
  { title: "CSS", value: 80 },
  { title: "JavaScript", value: 75 },
  { title: "ReactJS", value: 75 },
  { title: "Bootstrap", value: 85 },
  { title: "Tailwind", value: 80 },
];

export const PROGRESS_VALUES_BACKEND: Progress[] = [
  { title: "NodeJS", value: 60 },
  { title: "Express", value: 50 },
  { title: "MongoDB", value: 50 },
  { title: "MySQL", value: 50 },
];

export const PROGRESS_VALUES_DESIGNER: Progress[] = [
  { title: "Figma", value: 80 },
  { title: "Canva", value: 85 },
];

export const ACCORDION_DATA = [
  { title: "Frontend developer", progressValues: PROGRESS_VALUES_FRONTEND },
  { title: "Backend developer", progressValues: PROGRESS_VALUES_BACKEND },
  { title: "Designer", progressValues: PROGRESS_VALUES_DESIGNER },
];

export const CARD_DATA_SERVICES = [
  {
    src: "/icon/design.svg",
    job: "UI/UX Designer",
    btn: "View More",
    content: [
      "I specialize in developing user interfaces.",
      "I contribute to web page development.",
      "User experiences through interactive elements.",
      "Your company's brand for maximum impact.",
    ],
  },
  {
    src: "/icon/code.svg",
    job: "Frontend Developer",
    btn: "View More",
    content: [
      "I develop responsive and user-friendly interfaces.",
      "Web page development using modern technologies.",
      "User experiences through interactive elements.",
      "Company's brand effectively on the frontend.",
    ],
  },
  {
    src: "/icon/pen.svg",
    job: "Branding Designer",
    btn: "View More",
    content: [
      "I develop the user interface and user experience.",
      "I create visually appealing brand identities.",
      "I ensure brand consistency across various platforms.",
      "Collaborate with clients to understand their brand vision.",
    ],
  },
];
