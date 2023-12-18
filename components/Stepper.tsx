import React from "react";

interface StepProps {
  number: string;
  gpa: string;
  time: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, gpa, time, description }) => (
  <div className="flex justify-end">
    <div className="pt-1 pb-8 text-right mt-5 lg:pr-14 pr-5 text-sm text-gray-20 dark:text-white">
      <p className="mb-2 text-base font-bold text-start">{number}</p>
      <p className="text-sm text-start">{description}</p>
      <br />
      <p className="text-sm text-start">{gpa}</p>
      <div className="flex items-center text-sm">
        <i className="fas fa-calendar-alt text-gray-500 mr-1"></i>
        {time}
      </div>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 border rounded-full bg-blue-50" />
      {number !== "Success" && (
        <div className="w-[2px] h-full bg-blue-50 border-none" />
      )}
    </div>
  </div>
);

interface StepperProps {
  number: string;
  description: string;
  gpa: string;
  time: string;
}

const Stepper: React.FC<StepperProps> = (props) => {
  return (
    <div className="flex justify-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
      <div className="grid gap-6 row-gap-10 lg:grid-cols-1">
        <div className="lg:mr-40 mr-28">
          <Step
            number={props.number}
            description={props.description}
            gpa={props?.gpa}
            time={props.time}
          />
        </div>
      </div>
    </div>
  );
};

export default Stepper;
