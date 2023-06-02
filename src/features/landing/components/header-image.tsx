import React from "react";

export type HeroFoldProps = {
  image: string;
  title: React.ReactElement | string;
  titleVisible: boolean;
};

export const HeaderImage: React.FC<HeroFoldProps> = ({ image, title, titleVisible }) => {
  return (
    <div className={"w-[100%] relative flex items-center justify-center"}>
      <img src={image} alt={"Hero"} />
      {titleVisible ? (
        <h1 className={"absolute HeaderGradient top-0 font-bold text-[5em] sm:text-[8.75em] text-center mt-[176px]"}>
          {title}
        </h1>
      ) : null}
    </div>
  );
};
