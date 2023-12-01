import Image from "next/image";

const Website = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-10 dark:text-white p-3 gap-3">
        <Image
          src="/project/bolabol.jpg"
          alt="bolabol"
          width={400}
          height={300}
          style={{ borderRadius: "10px" }}
        />
        <Image
          src="/project/bolabol.jpg"
          alt="bolabol"
          width={400}
          height={300}
          style={{ borderRadius: "10px" }}
        />
        <Image
          src="/project/bolabol.jpg"
          alt="bolabol"
          width={400}
          height={300}
          style={{ borderRadius: "10px" }}
        />
      </div>
    </div>
  );
};

export default Website;
