import React from "react";
import { HeroImage } from "../../../common/assets";
import "../styles/landing.css";
import { Highlights } from "../components";
import { Categories } from "../components/categories";

export const Landing = () => {
  return (
    <div>
      <div className={"w-[100%] relative flex items-center justify-center"}>
        <img src={HeroImage} alt={"Hero Image"} />
        <h1 className={"absolute HeaderGradient top-0 font-bold text-[140px] text-center mt-[176px]"}>
          Welcome <br /> to Hawaii
        </h1>
      </div>
      <Highlights />
      <Categories />
    </div>
  );
};
