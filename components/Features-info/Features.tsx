import React from "react";
import { featureProps } from "../../lib/feature.lib";
import { BsSun, BsLightningCharge } from "react-icons/bs";
import { TiWarningOutline } from "react-icons/ti";

const Features = ({ title, examples }: featureProps) => {
  const style = {
    container: "flex flex-col items-center",
    title: "text-2xl font-bold ",
    example: "features animate ",
    iconStyle: "  text-2xl",
  };
  const Icon: any = {
    Examples: <BsSun className={style.iconStyle} />,
    Capabilities: <BsLightningCharge className={style.iconStyle} />,
    Limitations: <TiWarningOutline className={style.iconStyle} />,
  };
  return (
    <div className={style.container}>
      <div className="flex  space-x-4 items-center justify-center">
        {/* icon */}
        {Icon[title]}
        {/* title */}
        <h1 className={style.title}>{title}</h1>
        {/* examples box */}
      </div>
      <div className=" flex items-center flex-col mx-3">
        {examples.map((example, index) => {
          return (
            <div key={index} className={style.example}>
              {example}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
