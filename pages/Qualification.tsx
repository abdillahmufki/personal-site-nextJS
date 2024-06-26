"use client";
import React, { useState, useCallback } from "react";
import Stepper from "@/components/Stepper"; // Ensure this path is correct
import { DATA_WORKS } from "@/constants";

interface TabsProps {
  activeTab: number;
  handleTabClick: (tabIndex: number) => void;
}

const Tabs = ({ activeTab, handleTabClick }: TabsProps) => {
  const handleTabClickMemoized = useCallback(
    (tabIndex: number) => {
      handleTabClick(tabIndex);
    },
    [handleTabClick]
  );

  return (
    <div className="tabs flex justify-center my-10">
      <p
        className={`tab text-xl font-semibold ${
          activeTab === 1
            ? "tab-active text-blue-50"
            : "dark:text-white text-gray-20"
        }`}
        onClick={() => handleTabClickMemoized(1)}>
        Education
      </p>
      <p
        className={`tab text-xl font-semibold ${
          activeTab === 2
            ? "tab-active text-blue-50"
            : "dark:text-white text-gray-20"
        }`}
        onClick={() => handleTabClickMemoized(2)}>
        Work
      </p>
    </div>
  );
};

interface QualificationProps {}

const Qualification: React.FC<QualificationProps> = () => {
  const [activeTab, setActiveTab] = useState<number>(2);

  const handleTabClick = useCallback(
    (tabIndex: number) => {
      setActiveTab(tabIndex);
    },
    [setActiveTab]
  );

  return (
    <div className="text-center my-[300px] mb-[50px]" id="qualification">
      <div className="text-[#526D82]">
        <h2 className="text-4xl font-semibold text-gray-20 dark:text-white">
          Qualification
        </h2>
        <p className="text-sm text-gray-20 dark:text-white">
          My personal journey
        </p>
      </div>
      <div>
        <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
        <div>
          <div>
            {activeTab === 1 && (
              <div>
                <Stepper
                  number="Teknik Informatika"
                  description="Universitas Widyatama"
                  gpa="Current GPA 3.54"
                  time="2021 - Now"
                />
              </div>
            )}
          </div>
          <div>
            {activeTab === 2 && (
              <div>
                {DATA_WORKS.map((data) => (
                  <Stepper
                    key={data.companyName}
                    number={data.companyName}
                    description={data.position}
                    gpa=""
                    time={data.time}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
