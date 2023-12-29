import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icons: IconProp; // Change the type to IconProp
  full?: boolean;
};

const Button = ({ type, title, icons, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter bg-blue-90 p-3 text-white hover:bg-blue-50 gap-3 rounded-lg border-none ${
        full && "w-full"
      }`}
      type={type}>
      <label className="bold-16 cursor-pointer">{title}</label>
      {icons && (
        <FontAwesomeIcon
          icon={icons}
          className="cursor-pointer"
          width={18}
          height={18}
        />
      )}
    </button>
  );
};

export default Button;
