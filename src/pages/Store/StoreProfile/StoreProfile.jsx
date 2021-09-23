import React from "react";
import { SidebarStore } from "../../../components/modules/SidebarStore/SidebarStore";
import { StoreContent } from "../../../components/modules/StoreContent/StoreContent";

export const StoreProfile = () => {
  return (
    <div className={`bg-wrapper`}>
      <SidebarStore>
        <StoreContent/>
      </SidebarStore>
    </div>
  );
};
