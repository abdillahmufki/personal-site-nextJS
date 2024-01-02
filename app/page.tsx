"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Qualification from "@/pages/Qualification";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Loading from "@/components/Loading";
import WebsitePage from "@/pages/Website";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demonstration
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust this delay as needed
  }, []);

  return (
    <div className="bg-gray-10 dark:bg-slate-900">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <About />
          <Blog />
          <Skills />
          <Qualification />
          <Services />
          <Portfolio />
          <WebsitePage />
          <Contact />
        </>
      )}
    </div>
  );
}
