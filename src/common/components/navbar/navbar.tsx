import React, { useState } from "react";
import { AlohaLogo } from "../../assets/AlohaLogo";
import "./navbar.styles.css";
import { useNavigate } from "react-router-dom";
import { BurgerIcon } from "../../assets/burger-icon";
import { CloseIcon } from "../../assets/close-icon";

export const Navbar = () => {
  const navigate = useNavigate();

  const [sideNavOpen, setSideNavOpen] = useState(false);

  const NavTabs = [
    {
      title: "Home",
      navigate: "/",
    },
    {
      title: "Surfing",
      navigate: "/surfing",
    },
    {
      title: "Hula",
      navigate: "/traditional-festivals",
    },
    {
      title: "Volcano",
      navigate: "/volcanoes",
    },
  ];

  return (
    <div className={"fixed top-0 w-[100%] flex z-[999999] sm:pt-[24px] sm:px-[188px]"}>
      <div className={"flex items-center bg-white sm:rounded-[12px] w-[100%] p-[24px]"}>
        <AlohaLogo color={"#001A1A"} />
        <div className={"sm:ml-[80px] gap-[40px] sm:flex hidden"}>
          {NavTabs.map((tab) => {
            return (
              <p
                className={"text-black100 text-[16px] cursor-pointer"}
                key={tab.title}
                onClick={() => navigate(tab.navigate)}>
                {tab.title}
              </p>
            );
          })}
        </div>
        <button className={"NavbarButton ml-auto sm:block hidden"}>Book a trip</button>
        <div
          className={"ml-auto sm:hidden block"}
          onClick={() => {
            setSideNavOpen(true);
          }}>
          <BurgerIcon />
        </div>
        {sideNavOpen ? (
          <div
            className={"fixed top-0 right-0 z-[99999] bg-white pl-[40px] pr-[20px] w-[90vw] h-[100vh] flex flex-col"}>
            <div className={"ml-auto mr-[20px] mt-[20px] mb-[60px]"} onClick={() => setSideNavOpen(false)}>
              <CloseIcon />
            </div>
            {NavTabs.map((tab) => {
              return (
                <p
                  className={"text-black100 text-[16px] cursor-pointer mb-[40px]"}
                  key={tab.title}
                  onClick={() => {
                    navigate(tab.navigate);
                    setSideNavOpen(false);
                  }}>
                  {tab.title}
                </p>
              );
            })}
            <button className={"NavbarButton w-[170px]"}>Book a trip</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
