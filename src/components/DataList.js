import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../custom-components/Alert";
import AppButton from "../custom-components/AppButton";
const DataList = ({ films }) => {
  const [filteredData, setFilteredData] = useState(films);
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const handleFilter = (e) => {
    const value = e.target.value;
    const filtered = films.filter((film) => {
      return film.original_title
        .toLowerCase()
        .includes(value.toLowerCase().trim());
    });
    return setFilteredData(filtered);
  };

  const handleShowFilters = () => {
    return setShowFilterOptions(!showFilterOptions);
  };
  return (
    <div>
      <div className="data-list">
        <AppButton
          customClick={handleShowFilters}
          className={`${showFilterOptions ? "btn-danger" : ""}`}
        >
          {`${!showFilterOptions ? "Show" : "Hide"} Filters`}
        </AppButton>
      </div>
      {!showFilterOptions ? (
        ""
      ) : (
        <div className="searchbar-holder">
          <input
            className="searchbar"
            type="text"
            onChange={handleFilter}
            placeholder="Searchbar in FilmsList component"
          />
        </div>
      )}
      <main className="product-list-content">
        {filteredData.length === 0 ? (
          <Alert className="danger">Nothing Found</Alert>
        ) : (
          filteredData.map((film) => (
            <section key={film.id} className="product-preview-content">
              <p>{film.original_title}</p>
              <Link to={`/film/${film.id}`}>
                <img src={film.backdrop_path} alt={film.original_title} />
                {/* <p>{film.original_title}</p> */}
              </Link>
            </section>
          ))
        )}
      </main>
    </div>
  );
};

export default DataList;
