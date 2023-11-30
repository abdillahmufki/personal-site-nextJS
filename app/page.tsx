import React from "react";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Qualification from "@/pages/Qualification";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
export default function Home() {
  return (
    <React.Fragment>
      <div className="bg-[#fff] dark:bg-slate-900">
        <Hero />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </React.Fragment>
  );
}
