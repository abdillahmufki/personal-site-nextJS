import Image from "next/image";
import {
  About,
  Contact,
  DailyActivity,
  Hero,
  Portfolio,
  Qualification,
  Skills,
  Services,
} from "@/pages";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <DailyActivity />
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}
