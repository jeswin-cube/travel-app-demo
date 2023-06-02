import React from "react";

export type TravelGuideCardProps = {
  name: string;
  description: string;
  image: string;
};

export const TravelGuideCard: React.FC<TravelGuideCardProps> = ({ name, description, image }) => {
  return (
    <div className={"p-[24px] flex bg-white rounded-[8px] mt-[16px]"}>
      <div>
        <p className={"font-bold text-[24px] text-black100"}>{name}</p>
        <p className={"font-normal text-[16px] text-black100"}>{description}</p>
      </div>
      <img src={image} alt={"Travel guide"} className={"ml-auto h-[128px]"} />
    </div>
  );
};
