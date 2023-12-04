"use client";
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
      return <Image src="/icon/code.svg" alt="icon" width={25} height={25} />;
    case 1:
      return <Image src="/icon/server.svg" alt="icon" width={25} height={25} />;
    case 2:
      return <Image src="/icon/design.svg" alt="icon" width={25} height={25} />;
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

  const handleToggleAccordion = () => {
    handleAccordionClick(index);
  };

  return (
    <div
      className={`collapse collapse-arrow dark:bg-gray-10 bg-white join-item border-none my-3 ${
        isActive ? "open" : ""
      }`}>
      <input
        type="checkbox"
        id={`accordion-${index}`}
        checked={isActive}
        onChange={handleToggleAccordion}
      />
      <div className="collapse-title flex items-center gap-2">
        {Icon(index)}
        <h2 className="text-2xl font-semibold text-gray-20 dark:text-white">
          {title}
        </h2>
      </div>
      {isActive && (
        <div className="collapse-content gap-y-5">
          {progressValues.map((progress, idx) => (
            <div className="my-5 text-gray-20 dark:text-white" key={idx}>
              <div className="flex justify-between font-semibold text-gray-20 dark:text-white">
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

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex justify-center">
      <div className="lg:w-[70%] min-h-full p-5 lg:px-28">
        {ACCORDION_DATA.map((item, index) => (
          <AccordionItem
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

export default Accordion;
