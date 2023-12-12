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

export default function Home() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setContentLoaded(true);
    };

    fetchData();
  }, []);

  return (
    <>
      {!contentLoaded ? (
        <Loading />
      ) : (
        <div className="bg-[#fff] dark:bg-slate-900">
          <Hero />
          <About />
          <Skills />
          <Qualification />
          <Services />
          <Portfolio />
          <Contact />
        </div>
      )}
    </>
  );
}
