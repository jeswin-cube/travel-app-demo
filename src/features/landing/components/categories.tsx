import React from "react";
import { TravelGuideCard } from "./travel-guide-card";
import { GuideImage } from "../assets";

export const Categories = () => {
  return (
    <div className={"px-[188px] flex bg-backgroundGreen gap-[32px] pb-[80px]"}>
      <div className={"basis-1/2"}>
        <p className={"text-black100 font-bold text-[16px] mt-[40px]"}>Categories</p>
      </div>
      <div className={"basis-1/2"}>
        <p className={"text-black100 font-bold text-[16px] mt-[40px]"}>Travel Guide</p>
        <TravelGuideCard name={"Hadwin Malone"} description={"Guide since 2012"} image={GuideImage} />
      </div>
    </div>
  );
};
