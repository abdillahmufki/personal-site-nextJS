"use client";

import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Qualification from "@/pages/Qualification";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";

export default function Home() {
  return (
    <>
      <div className="bg-[#fff] dark:bg-slate-900">
        <Hero />
        <About />
        <Blog />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
