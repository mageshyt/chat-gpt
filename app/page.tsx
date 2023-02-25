import Features from "../components/Features-info/Features";
import { featuresData } from "../lib/feature.lib";

const HomePage = () => {
  const style = {
    container:
      "text-white   h-screen flex flex-col items-center justify-center  ",
    title: "text-5xl font-bold mb-10 ",
    featureContainer:
      "flex  flex-col md:flex-row my-10 items-center justify-between space-x-6 ",
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
