"use client"; // I'm not sure about this line; it looks unusual

import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { Progress, ACCORDION_DATA } from "@/constants";
import Image from "next/image";

interface AccordionItemProps {
  index: number;
  activeIndex: number | null;
  handleAccordionClick: (index: number) => void;
  title: string;
  progressValues: Progress[];
}

const Icon = (index: number): JSX.Element => {
  switch (index) {
    case 0:
      return (
        <Image src="/icon/code.svg" alt="code icon" width={25} height={25} />
      );
    case 1:
      return (
        <Image
          src="/icon/server.svg"
          alt="server icon"
          width={25}
          height={25}
        />
      );
    case 2:
      return (
        <Image
          src="/icon/design.svg"
          alt="design icon"
          width={25}
          height={25}
        />
      );
    default:
      return <></>;
  }
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  index,
  activeIndex,
  handleAccordionClick,
  title,
  progressValues,
}) => {
  const isActive = activeIndex === index;

  const handleClick = () => {
    handleAccordionClick(index);
  };

  return (
    <div
      className={`collapse collapse-arrow bg-white dark:bg-blue-90 border-none my-3 ${
        isActive ? "open" : ""
      }`}>
      <input
        type="checkbox"
        id={`accordion-${index}`}
        checked={isActive}
        onChange={handleClick}
      />
      <div
        className="collapse-title flex items-center gap-2 cursor-pointer hover:opacity-75"
        onClick={handleClick}>
        {Icon(index)}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h2>
      </div>
      {isActive && (
        <div className="collapse-content gap-y-5">
          {progressValues.map((progress: Progress, idx: number) => (
            <div className="my-5 text-gray-800 dark:text-gray-100" key={idx}>
              <div className="flex justify-between font-semibold text-gray-800 dark:text-gray-100">
                <p>{progress.title}</p>
                <p className="text-end">{progress.value}%</p>
              </div>
              <ProgressBar progress={progress.value} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Accordion: React.FC<AccordionItemProps> = ({
  index,
  activeIndex,
  handleAccordionClick,
  title,
  progressValues,
}) => {
  return (
    <AccordionItem
      index={index}
      activeIndex={activeIndex}
      handleAccordionClick={handleAccordionClick}
      title={title}
      progressValues={progressValues}
    />
  );
};

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center">
      <div className="lg:w-[70%] min-h-full p-5 lg:px-28">
        {ACCORDION_DATA.map((item, index) => (
          <Accordion
            key={index}
            index={index}
            activeIndex={activeIndex}
            handleAccordionClick={handleAccordionClick}
            title={item.title}
            progressValues={item.progressValues}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
