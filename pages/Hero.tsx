import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-row gap-10 justify-center">
      <div>lorem</div>
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold leading-tight text-blue-95">
          Hello, My <br /> name is <br /> Abdillah Mufki
        </h1>
        <h2 className="text-xl font-semibold text-blue-95">
          FRONTEND DEVELOPER
        </h2>
        <p className="text-base text-blue-95">
          High level in web design and development knowledge, producing quality
          work.
        </p>
      </div>
      <div>
        <Image
          src="/profileMufki.png"
          alt="Picture of the author"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Hero;
