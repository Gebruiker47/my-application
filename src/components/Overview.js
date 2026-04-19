import { useState, useEffect } from "react";
import DesktopNavigation from "./DesktopNavigation";

const Overview = ({ films }) => {
  const { data, setData } = useState(films);

  const handleFilter = (e) => {
    const value = e.target.value;
    const filtered = films.filter((film) => {
      return film.original_title
        .toLowerCase()
        .includes(value.toLowerCase().trim());
    });
    return setData(filtered);
  };
  return (
    <div>
      <DesktopNavigation />
      Overview
      <div className="searchbar-holder">
        <input
          className="searchbar"
          type="text"
          onChange={handleFilter}
          placeholder="Searchbar in FilmsList component"
        />
      </div>
      {data && data.map((film) => <h1>{film.original_title}</h1>)}
    </div>
  );
};

export default Overview;
