import React, {useState} from "react";
import style from "./NavbarSearch.module.css";
import { useHistory } from "react-router";

export const NavbarSearch = (props) => {
  const move = useHistory()
  const [keyword, setKeyword] = useState('')

  const handleKeyword = (e) => {
    setKeyword(e.target.value)
    // return <Redirect to={`search/?keyword=${keyword}`} />
  }
  
  const handleSearch = () => {
    move.push(`/search/?keyword=${keyword}`)
  }

  return (
    <div className={`ps-lg-5 mt-lg-0 mt-2 m-auto input-group ${style.searchInputWrapper}`}>
      <input
        type="text"
        class={`form-control ps-4 ${style.searchInput}`}
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon1"
        name="search"
        onChange={e => handleKeyword(e)}
      ></input>
      <button class={`btn rounded-start rounded-pill pt-1 ${style.btnSearch}`} onClick={() => handleSearch()}>
        <i class="fa fa-search"></i>
      </button>
    </div>
  );
};
