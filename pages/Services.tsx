"use client";
import Card from "@/components/Card";
import { CARD_DATA_SERVICES } from "@/constants";

interface ServiceCard {
  src: string;
  job: string;
  btn: string;
  content: string[];
}

const Services: React.FC = () => {
  const cardes: ServiceCard[] = CARD_DATA_SERVICES;

  return (
    <div className="my-[100px]" id="services">
      <div className="text-center min-h-min text-[#526D82]">
        <h2 className="text-4xl font-semibold text-gray-20 dark:text-white">
          Services
        </h2>
        <p className="text-sm text-gray-20 dark:text-white">What I offer</p>
      </div>
      <div className="p-5 flex lg:flex-row max-[600px]:grid max-[600px]:grid-cols-2 gap-5 sm:flex-row justify-center sm:justify-center items-center my-10">
        {cardes.map((card, index) => (
          <Card
            key={index}
            title={card.job}
            src={card.src}
            job={card.job}
            btn={card.btn}
            content={card.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
