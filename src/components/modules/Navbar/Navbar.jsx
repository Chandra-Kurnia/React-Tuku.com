import React from "react";
import { NavbarAuth } from "../../base/NavbarAuth/NavbarAuth";
import { NavbarLogos } from "../../base/NavbarLogos/NavbarLogos";
import { NavbarSearch } from "../../base/NavbarSearch/NavbarSearch";
import { Filter } from "../Filter/Filter";

export const Navbar = () => {
  return (
    <div className="navbar navbar-light bg-light d-flex pt-4 pb-3 shadow">
      <div className="container">
        <div className="NavbarContent d-flex flex-wrap">
          <NavbarLogos />
          <NavbarSearch />
          <Filter/>
        </div>
        <div className="NavbarAuth pt-3 pt-lg-0">
            <NavbarAuth/>
        </div>
      </div>
    </div>
  );
};
