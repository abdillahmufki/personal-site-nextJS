import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { ICON_HERO } from "@/constants";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-20 justify-center items-center lg:py-24 p-5">
      <div className="flex lg:flex-col flex-row gap-5">
        {ICON_HERO.map((item, index) => (
          <Link target="_blank" href={item.href} key={index}>
            <Image
              src={item.src}
              alt={item.title}
              width={35}
              height={35}
              className="cursor-pointer"
            />
          </Link>
        ))}
      </div>
      <div className="flex lg:flex-row items-center justify-center flex-col-reverse lg:gap-24 gap-5">
        <div className="flex flex-col lg:w-72 w-full text-left gap-3">
          <h1 className="lg:text-5xl text-3xl font-bold leading-snug tracking-wider text-gray-20">
            Hello, My name is Abdillah Mufki
          </h1>
          <h2 className="lg:text-xl text-lg  font-semibold text-gray-20">
            FRONTEND WEB DEVELOPER
          </h2>
          <p className="text-base text-gray-20">
            High level in web design and development knowledge, producing
            quality work.
          </p>
          <div>
            <Button
              type="button"
              title="Contact Me"
              variant="btn_dark_blue"
              icon="/icon/contact.svg"
            />
          </div>
        </div>
        <div className="flex justify-center max-[528px]:bg-blue-50 rounded-full w-64">
          <Image
            src="/profileMufki.png"
            alt="Picture of the author"
            width={200}
            height={200}
            className="object-contain h-72 w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
