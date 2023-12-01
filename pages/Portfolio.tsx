import Tab from "@/components/Tab";

const Portfolio = () => {
  return (
    <section id="portfolio">
      {" "}
      <div className="flex justify-center flex-col items-center mt-5 mb-[50px]">
        <h2 className="text-4xl font-semibold text-gray-20 dark:text-white">
          Portfolio
        </h2>
        <p className="text-gray-20 dark:text-white text-sm">Most recent work</p>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <Tab />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
