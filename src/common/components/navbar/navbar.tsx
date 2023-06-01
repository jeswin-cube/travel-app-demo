import React from "react";
import { AlohaLogo } from "../../assets/AlohaLogo";
import "./navbar.styles.css";

export const Navbar = () => {
  const NavTabs = [
    {
      title: "Home",
      navigate: "/home",
    },
    {
      title: "Surfing",
      navigate: "/surfing",
    },
    {
      title: "Hula",
      navigate: "/hula",
    },
    {
      title: "Volcano",
      navigate: "/volcano",
    },
  ];

  return (
    <div className={"fixed top-0 w-[100%] flex z-[999999] pt-[24px] px-[188px]"}>
      <div className={"flex items-center bg-white rounded-[12px] w-[100%] p-[24px]"}>
        <AlohaLogo color={"#001A1A"} />
        <div className={"flex ml-[80px] gap-[40px]"}>
          {NavTabs.map((tab) => {
            return (
              <p className={"text-black100 text-[16px] cursor-pointer"} key={tab.title}>
                {tab.title}
              </p>
            );
          })}
        </div>
        <button className={"NavbarButton ml-auto"}>Book a trip</button>
      </div>
    </div>
  );
};
