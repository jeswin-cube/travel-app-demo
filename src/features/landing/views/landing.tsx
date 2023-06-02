import React, { useEffect, useState } from "react";
import "../styles/landing.css";
import { Highlights } from "../components";
import { Categories } from "../components/categories";
import { HeaderImage } from "../components/header-image";
import { HeroImage, HeroImageMobile } from "../../../common/assets";

export const Landing = () => {
  const [heroImage, setHeroImage] = useState(HeroImage);

  const handleWindowResize = () => {
    if (window.innerWidth > 640) {
      setHeroImage(HeroImage);
    } else {
      setHeroImage(HeroImageMobile);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div>
      <HeaderImage
        titleVisible={true}
        image={heroImage}
        title={
          <>
            Welcome <br /> to Hawaii{" "}
          </>
        }
      />
      <Highlights />
      <Categories />
    </div>
  );
};
