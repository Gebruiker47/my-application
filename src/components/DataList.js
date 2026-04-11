import { useState } from "react";
import { Link } from "react-router-dom";

const DataList = ({ films }) => {
  const [filteredData, setFilteredData] = useState(films);

  const handleFilter = (e) => {
    const value = e.target.value;
    const filtered = films.filter((film) => {
      return film.original_title
        .toLowerCase()
        .includes(value.toLowerCase().trim());
    });
    return setFilteredData(filtered);
  };
  return (
    <div>
      <div className="searchbar-holder">
        <input
          className="searchbar"
          type="text"
          onChange={handleFilter}
          placeholder="Searchbar in FilmsList component"
        />
      </div>
      {filteredData.length === 0
        ? "Geen data beschikbaar"
        : filteredData.map((film) => (
            <div key={film.id}>
              <h1>{film.original_title}</h1>
              <Link to={`/film/${film.id}`}>
                <img src={film.backdrop_path} alt={film.original_title} />
                <p>{film.original_title}</p>
              </Link>
            </div>
          ))}
    </div>
  );
};

export default DataList;
