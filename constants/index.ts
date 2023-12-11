export const PROJECT_DATA_WEBSITE = [
  {
    id: 1,
    title: "Web KuyTravel",
    description:
      "The KuyTravel website is a modern, responsive and feature-rich website. This website was built using modern and latest technologies such as NextJs, TypeScript, Tailwind.",
    src: "/project/KuyTravel.png",
    link: "https://kuy-travel.vercel.app/",
  },

  {
    id: 3,
    title: "Frontend Digital CV",
    description:
      "Online job portal website application that connects talented professionals like you with exciting career opportunities. Developed using a robust HTML, CSS, JavaScript, Bootstrap and jQuery stack, DigitalCV offers a seamless and easy-to-use experience for job seekers and employers alike.",
    src: "/project/DigitalCv.png",
    link: "https://digitalcv.id/id/candidate/index.php",
  },
  {
    id: 4,
    title: "Company Profile Gestalt Systech",
    description:
      "I am very proud to display my skills as a developer specializing in creating captivating company profiles for software houses and IT consulting firms. One of my notable projects involved collaborating with Gestalt Systech, a leading name in the industry, to develop a stunning company profile using React.js and Tailwind CSS.",
    src: "/project/GestaltSystech.png",
    link: "https://gestaltsystech.vercel.app/",
  },
  {
    id: 5,
    title: "GPT-3 Clone ReactJS",
    description:
      "GPT-3 is a clone of OpenAI, this project is a learning media javscript library for creating compnent based user intefaces, using ReactJS",
    src: "/project/gpt3.png",
    link: "https://github.com/abdillahmufki/Modern-UI-UX-Website-in-React-JS",
  },
  {
    id: 6,
    title: "Company Profile PT. Buana Selaras Berjaya",
    description:
      "Our impressive company profile project utilizes the power of React.js and Tailwind CSS to create a captivating online presence for your business. With a sleek design, responsive layout, and seamless functionality, this project showcases your company's strengths and offerings in a modern and engaging way.",
    src: "/project/Bsb.png",
    link: "http://buanaselarasberjaya.com/",
  },
  {
    id: 7,
    title: "KuyNgemils",
    description:
      "Built using the powerful React.js technology, KuyNgemils offers fast and responsive performance. You can explore the various available food menus smoothly, view food details, set personal preferences, and track orders easily. In addition, with an attractive and intuitive design, this application provides a pleasing user experience that pleases your eyes.",
    src: "/project/foodorderapp.png",
    link: "https://foodorderapp-delta.vercel.app/",
  },
  {
    id: 9,
    title: "Web Bolabol",
    description:
      "Bolabol is a website for football lovers, where football fans can see clubs, players, managers, and stadiums. This website was created using Laravel's Eloquent ORM.",
    src: "/project/bolabol.jpg",
    link: "https://github.com/abdillahmufki/Bolabol",
  },
  {
    id: 10,
    title: "Management Kecamatan",
    description:
      "In this project, I created CRUD on the Management Kecamatan feature, with the CodeIgniter 4 Framework.",
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
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Qualification", href: "#qualification" },
  { title: "Services", href: "#services" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Contact", href: "#contact" },
];

export const ICON_HERO = [
  {
    href: "https://www.linkedin.com/in/abdillah-mufki-auzan-mubin-55a873212/",
    title: "LinkedIn",
    src: "/icon/linkedin.svg",
    alt: "Picture of the author",
  },
  {
    href: "https://github.com/abdillahmufki",
    title: "Github",
    src: "/icon/github.svg",
    alt: "Picture of the author",
  },
  {
    href: "https://www.instagram.com/mufkimustache/",
    title: "Instagram",
    src: "/icon/instagram.svg",
    alt: "Picture of the author",
  },
  {
    href: "https://linktr.ee/abdillahmufki",
    title: "Linktree",
    src: "/icon/linktree.svg",
    alt: "Picture of the author",
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
