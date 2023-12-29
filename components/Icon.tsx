import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
  icon: IconProp;
}

const Icon = ({ icon }: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className="w-8 h-8 text-gray-20 dark:text-white"
    />
  );
};

export default Icon;
