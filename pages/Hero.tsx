import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { ICON_HERO, ICON_DATA_TECH } from "@/constants";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CustomIcon from "@/components/Icon";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

const Icon = ({ src, alt, className }: IconProps) => {
  return (
    <Image
      src={src}
      alt={`${alt} icon`}
      width={30}
      height={30}
      className={className}
      style={{ width: "30", height: "30" }}
    />
  );
};
const Hero = () => {
  return (
    <section className="flex lg:flex-row flex-col relative bg-gray-10 dark:bg-slate-900 gap-10 py-24 justify-center lg:items-center min-h-screen lg:py-24 p-5">
      <div className="flex flex-row justify-center lg:flex-col gap-5">
        {ICON_HERO.map((item, index) => (
          <Link target="_blank" href={item.href} key={index}>
            <CustomIcon icon={item.icon} />
          </Link>
        ))}
      </div>
      <div className="flex lg:flex-row items-center justify-center flex-col-reverse lg:gap-24 gap-5 p-5 lg:mt-10">
        <div className="flex flex-col lg:w-[300px] w-full text-left gap-3">
          <h1 className="lg:text-  5xl text-3xl font-bold leading-snug tracking-wider text-gray-20 dark:text-white">
            Hello, My name is Abdillah Mufki
          </h1>
          <h2 className="lg:text-xl text-lg font-semibold text-gray-20 dark:text-white">
            FRONTEND WEB DEVELOPER
          </h2>
          <p className="text-base text-gray-20 dark:text-white">
            High level in web design and development knowledge, producing
            quality work.
          </p>
          <Link href="#contact">
            <Button type="button" title="Contact Me" icons={faEnvelope} />
          </Link>
        </div>
        <div className="bg-blue-50 shadow-md w-[16rem] h-[20rem] rounded-full p-5 flex justify-center items-center">
          <Image
            src="/profileMufki.jpg"
            alt="Picture of the author"
            width={250}
            height={250}
            className="rounded-full shadow-md"
            loading="lazy"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex gap-3 lg:flex-col flex-row">
          {ICON_DATA_TECH.map((item, index) => (
            <Icon
              src={item.src}
              alt={item.alt}
              className="animate-bounce"
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
