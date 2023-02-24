import React from "react";
import { featureProps } from "../../lib/feature.lib";

const Features = ({ title, examples }: featureProps) => {
  return (
    <div>
      <h1>{title}</h1>

      {/* examples box */}
      <div className=" ">
        {examples.map((example, index) => {
          return (
            <div className="bg-[#41424d] w-[260px] m-4 p-2 rounded-md ">
              <p>{example}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
