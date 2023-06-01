import React from "react";
import { useGetHighlight } from "../queries";
import { HighlightCard } from "./highlight-card";

export const Highlights = () => {
  const { data: highlights, isLoading: highlightsLoading } = useGetHighlight();
  console.log(highlights);
  return (
    <div className={"flex flex-col justify-center px-[188px]"}>
      <p className={"text-black100 font-bold text-[16px] mt-[40px]"}>Highlights</p>
      <div className={"flex gap-[17px] mt-[24px] mb-[80px]"}>
        {!!highlights
          ? highlights.map((highlight, index) => {
              return <HighlightCard highlight={highlight} key={index} />;
            })
          : null}
      </div>
    </div>
  );
};
