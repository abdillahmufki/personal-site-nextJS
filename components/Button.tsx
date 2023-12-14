import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  full?: boolean;
};

const Button = ({ type, title, icon, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter bg-blue-90 p-3 text-white hover:bg-blue-50 gap-3 rounded-lg border-none ${
        full && "w-full"
      }`}
      type={type}>
      <label className="bold-16 cursor-pointer">{title}</label>
      {icon && (
        <Image src={icon} alt={`Icon ${title}`} width={24} height={24} />
      )}
    </button>
  );
};

export default Button;
