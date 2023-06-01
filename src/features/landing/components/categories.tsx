import React, { useState } from "react";
import { TravelGuideCard } from "./travel-guide-card";
import { GuideImage } from "../assets";
import { useGetCategories } from "../queries";
import { CategoryCard } from "./category-card";

export const Categories = () => {
  const { data: categories, isLoading: categoryLoading } = useGetCategories();
  const [cardVisible, setCardVisible] = useState([false, false, false, false, false]);

  return (
    <div className={"px-[188px] flex bg-backgroundGreen gap-[32px] pb-[80px]"}>
      <div className={"basis-1/2"}>
        <p className={"text-black100 font-bold text-[16px] mt-[40px] mb-[16px]"}>Categories</p>
        {!!categories
          ? categories.map((category, index) => {
              return (
                <CategoryCard
                  category={category}
                  key={category.name}
                  cardVisible={cardVisible}
                  setCardVisible={setCardVisible}
                  index={index}
                />
              );
            })
          : null}
      </div>
      <div className={"basis-1/2"}>
        <p className={"text-black100 font-bold text-[16px] mt-[40px]"}>Travel Guide</p>
        <TravelGuideCard name={"Hadwin Malone"} description={"Guide since 2012"} image={GuideImage} />
      </div>
    </div>
  );
};
