"use client";
import React, { useState } from "react";
import Application from "./Portfolio/Application";
import Desain from "./Portfolio/Desain";
import Website from "./Portfolio/Website";

const Tab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1); // Initially, Tab 2 is active

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <Website />;
      case 1:
        return <Application />;
      case 2:
        return <Desain />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <div
        role="tablist"
        className="tabs tabs-boxed flex justify-center bg-transparent gap-5">
        <a
          role="tab"
          className={`tab outline outline-1 text-gray-20 font-semibold dark:text-white ${
            activeTab === 0 ? "tab-active bg-blue-50 outline-none" : ""
          }`}
          onClick={() => handleTabClick(0)}>
          Website
        </a>
        <a
          role="tab"
          className={`tab outline outline-1 text-gray-20 font-semibold dark:text-white ${
            activeTab === 1 ? "tab-active outline-none" : ""
          }`}
          onClick={() => handleTabClick(1)}>
          Application
        </a>
        <a
          role="tab"
          className={`tab outline outline-1 text-gray-20 font-semibold dark:text-white ${
            activeTab === 2 ? "tab-active outline-none" : ""
          }`}
          onClick={() => handleTabClick(2)}>
          Design
        </a>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default Tab;
