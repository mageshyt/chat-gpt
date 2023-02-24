import React from "react";
import Features from "../components/Features-info/Features";
import { featuresData } from "../lib/feature.lib";

const HomePage = () => {
  const style = {
    container: "flex text-white flex-col items-center justify-center h-screen",
    title: "text-5xl font-bold mb-10 ",
    featureContainer: "flex  items-center justify-between  w-5/12 ",
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>ChatGPT</h1>

      <div className={style.featureContainer}>
        {featuresData.map((feature, index) => {
          return <Features key={index} {...feature} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
