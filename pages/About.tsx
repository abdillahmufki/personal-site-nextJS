import Image from "next/image";

const About = () => {
  const items = [
    { value: "01+", label: "Years experience" },
    { value: "05+", label: "Complete project" },
    { value: "1", label: "Companies worked" },
  ];
  return (
    <section id="about" className="relative my-16 p-5">
      <div className="text-center grid grid-cols-1 lg:mb-16">
        <h1 className="lg:text-4xl text-2xl text-gray-20 font-semibold">
          About Me
        </h1>
        <p className="text-gray-30">My Introduction</p>
      </div>
      <div className="flex flex-row justify-center gap-10">
        <div className="w-[720px] flex flex-col justify-center gap-10">
          <div className="flex flex-col items-center gap-5">
            <div>
              <Image
                src="/about.png"
                alt="Picture of the author"
                width={300}
                height={300}
                className="lg:w-96 lg:h-96 w-80 h-80 object-cover shadow-md rounded-md mx-auto"
              />
            </div>
            <div className="lg:w-2/3">
              <p className="lg:text-left text-center text-gray-20">
                Web developer with extensive knowledge and years of experience,
                working in web technologies and UI/UX design, delivering quality
                work.
              </p>
            </div>
            <div className="flex justify-between lg:flex-row flex-col lg:gap-20 gap-2 bg-white shadow-md rounded-md">
              {items.map((item, index) => (
                <div key={index} className="mx-4 my-4 text-center md:my-0">
                  <div className="stat">
                    <h2 className="stat-desc text-gray-20">
                      <span className="text-3xl font-bold stat-value text-blue-50">
                        {item.value}
                      </span>
                      <br /> {item.label}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
