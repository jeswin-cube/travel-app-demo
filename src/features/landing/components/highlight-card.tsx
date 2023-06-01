import React from "react";
import { Highlight } from "../types";
import { Arrow } from "../assets";

type HighlightCardProps = {
  highlight: Highlight;
};

export const HighlightCard: React.FC<HighlightCardProps> = ({ highlight }) => {
  return (
    <div className={"basis-1/3 shadow-highlightCard rounded-[8px] overflow-hidden relative"}>
      <img src={highlight.image} alt={"Highlight Image"} />
      <p className={"text-green100 font-semibold text-[24px] mt-[24px] mx-[24px]"}>{highlight.title}</p>
      <p className={"text-black100 font-normal text-[16px] mt-[16px] mx-[24px] mb-[70px]"}>{highlight.description}</p>
      <div className={"absolute right-[24px] bottom-[24px]"}>
        <Arrow />
      </div>
    </div>
  );
};
