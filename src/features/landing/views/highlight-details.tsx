import React from "react";
import { HighlightsType } from "../types";
import { useLoaderData } from "react-router-dom";
import { useGetHighlightDetails } from "../queries";
import { HeaderImage } from "../components/header-image";

export const HighlightParamsLoader = ({ params }: { params: { highlight: string } }) => {
  switch (params["highlight"]) {
    case "surfing":
      return HighlightsType.Surfing;
    case "traditional-festivals":
      return HighlightsType.TraditionalFestivals;
    case "volcanoes":
      return HighlightsType.Volcanoes;
  }

  throw new Response("Not Found", { status: 404 });
};

export const HighlightDetails = () => {
  const highlightType = useLoaderData() as HighlightsType;

  const { data: highlightDetails } = useGetHighlightDetails(highlightType);

  return (
    <div className={"flex flex-col items-center justify-center max-h-[100vh] overflow-hidden"}>
      {!!highlightDetails ? (
        <>
          <HeaderImage image={highlightDetails.image} title={highlightDetails.name} titleVisible={false} />
          <div className={"absolute bg-white top-0 sm:w-[70%] w-[90%] sm:mt-[300px] mt-[100px] rounded-[8px] p-[24px]"}>
            <p className={"font-bold sm:text-[24px] text-[12px] text-green100 mb-[8px]"}>
              {highlightDetails.description}
            </p>
            {highlightDetails.activities.map((activity) => {
              return (
                <p
                  className={"font-semibold sm:text-[24px] text-[12px] text-black100"}
                  key={activity.name}>{`-> ${activity.name}`}</p>
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
};
