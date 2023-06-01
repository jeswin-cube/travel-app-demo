import React from "react";

import { Outlet } from "react-router-dom";
import { Navbar } from "../../../common/components";
import { Footer } from "../../../common/components/footer";

export const Root = () => {
  return (
    <div className={"h-[100%]"}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
