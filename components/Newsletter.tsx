import React from "react";
import Button from "./Button";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
  return (
    <div className="p-6 mb-8 rounded-2xl  bg-white dark:bg-slate-800 shadow-md w-auto">
      <div className="flex flex-col gap-5">
        <h2 className="text-lg font-semibold text-black dark:text-white">
          📫 Newsletter..
        </h2>
        <p className="text-sm">
          Mau dapat tips belajar coding, info teknologi, dan perkembangan karir
          sebagai programmer?
        </p>
        <Button
          type="button"
          full
          icons={faEnvelope}
          title="Subscribe"
          i18nIsDynamicList
          key=""
        />
      </div>
    </div>
  );
};

export default Newsletter;
