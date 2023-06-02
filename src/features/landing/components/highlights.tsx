import React from "react";
import { useGetHighlights } from "../queries";
import { HighlightCard } from "./highlight-card";
import { Loading } from "../../../common/assets/loading";

export const Highlights = () => {
  const { data: highlights, isLoading: highlightsLoading } = useGetHighlights();

  return (
    <>
      {highlightsLoading ? (
        <Loading />
      ) : (
        <div className={"flex flex-col justify-center sm:px-[188px] px-[17px]"}>
          <p className={"text-black100 font-bold text-[16px] mt-[40px]"}>Highlights</p>
          <div className={"flex sm:flex-row gap-[17px] mt-[24px] mb-[80px] HighlightCarousel"}>
            {!!highlights
              ? highlights.map((highlight, index) => {
                  return <HighlightCard highlight={highlight} key={index} />;
                })
              : null}
          </div>
        </div>
      )}
    </>
  );
};
