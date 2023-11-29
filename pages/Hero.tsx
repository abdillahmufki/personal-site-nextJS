import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { ICON_HERO } from "@/constants";

interface BackgroundProps {
  backgroundImage: string;
  children: React.ReactNode;
}

const Background = ({ backgroundImage, children }: BackgroundProps) => {
  return (
    <div className="h-full flex justify-center">
      <div className={` ${backgroundImage} bg-contain bg-no-repeat w-full p-5`}>
        {children}
      </div>
    </div>
  );
};
const Hero = () => {
  return (
    <section className="flex lg:flex-row relative bg-gradient flex-col gap-10 py-24 justify-center items-center min-h-screen lg:py-24 p-5">
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
      <div className="flex lg:flex-row items-center justify-center flex-col-reverse lg:gap-24 gap-5 p-5 lg:mt-10">
        <div className="flex flex-col lg:w-[300px] w-full text-left gap-3">
          <h1 className="lg:text-  5xl text-3xl font-bold leading-snug tracking-wider text-gray-10">
            Hello, My name is Abdillah Mufki
          </h1>
          <h2 className="lg:text-xl text-lg font-semibold text-gray-10">
            FRONTEND WEB DEVELOPER
          </h2>
          <p className="text-base text-gray-10">
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
        <div className="bg-blue-50 shadow-md w-[16rem] h-[20rem] rounded-full p-5 flex justify-center items-center">
          <Image
            src="/profileMufki.jpg"
            alt="Picture of the author"
            width={200}
            height={200}
            className="rounded-full shadow-md"
            loading="lazy"
            style={{ width: "250", height: "250" }}
          />
        </div>
        <div className="flex gap-3 flex-col">
          <Image
            src="/icon/html.svg"
            alt="Picture of the author"
            width={30}
            height={30}
            className="animate-bounce"
            style={{ width: "30", height: "30" }}
          />
          <Image
            src="/icon/css.svg"
            alt="Picture of the author"
            width={30}
            height={30}
            className="animate-bounce"
            style={{ width: "30", height: "30" }}
          />
          <Image
            src="/icon/js.svg"
            alt="Picture of the author"
            width={30}
            height={30}
            className="animate-bounce"
            style={{ width: "30", height: "30" }}
          />
          <Image
            src="/icon/react.svg"
            alt="Picture of the author"
            width={30}
            height={30}
            className="lg:animate-spin animate-bounce"
            style={{ width: "30", height: "30" }}
          />
          <Image
            src="/icon/nextjs-solid.svg"
            alt="Picture of the author"
            width={30}
            height={30}
            className="animate-bounce"
            style={{ width: "30", height: "30" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
