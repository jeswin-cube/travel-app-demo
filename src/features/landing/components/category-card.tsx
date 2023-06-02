import React from "react";
import { Category } from "../types";
import { SimpleArrowLogo } from "../assets/simple-arrow-logo";
import classNames from "classnames";

export type CategoryCardProps = {
  category: Category;
  cardVisible: boolean[];
  setCardVisible: React.Dispatch<React.SetStateAction<boolean[]>>;
  index: number;
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, cardVisible, setCardVisible, index }) => {
  const handleArrowClick = () => {
    setCardVisible((prevState) => {
      let invertedState = !prevState[index];
      let newState = [false, false, false, false, false];
      newState[index] = invertedState;
      return [...newState];
    });
  };

  return (
    <div className={"relative"}>
      <div className={"bg-white p-[24px] flex items-center justify-between mb-[8px] rounded-[8px]"}>
        <p className={"text-black100 text-[16px]"}>{category.name}</p>
        <div
          onClick={handleArrowClick}
          className={classNames(
            cardVisible[index] ? "rotate-90" : "rotate-[-90]",
            "transition-[transform_250ms_ease]",
          )}>
          <SimpleArrowLogo />
        </div>
      </div>
      {cardVisible[index] ? (
        <div className={"absolute right-0 bg-white rounded-[8px] z-[9999] p-[12px] shadow-highlightCard"}>
          <p className={"text-black100 font-semibold mb-[8px]"}>Activities to try out</p>
          {category.activities.map((activity) => {
            return <p className={"text-black100 mb-[4px]"}>{`-> ${activity.title}`}</p>;
          })}
        </div>
      ) : null}
    </div>
  );
};
