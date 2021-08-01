import React from "react";
import { NavbarStore } from "../../../components/modules/NavbarStore/NavbarStore";
import { SidebarStore } from "../../../components/modules/SidebarStore/SidebarStore";

export const StoreProfile = () => {
  return (
    <div className={`bg-wrapper`}>
      <NavbarStore />
      <SidebarStore/>
    </div>
  );
};
