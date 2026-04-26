import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../custom-components/Alert";
import AppButton from "../custom-components/AppButton";
import Header from "../custom-components/Header";
const DataList = ({ films }) => {
  const [filteredData, setFilteredData] = useState(films);
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  // Begin van zoekfunctie dmv inputveld:
  const [selected, setSelected] = useState("");
  const handleFilter = (e) => {
    const value = e.target.value;
    const filtered = films.filter((film) => {
      if (selected === "original_title") {
        return film.original_title
          .toLowerCase()
          .includes(value.toLowerCase().trim());
      } else if (selected === "movie_id") {
        return film.movie_id.toString().includes(value.toString().trim());
      }
    });
    return setFilteredData(filtered);
  };

  // Einde van zoekfunctie dmv inputveld.

  const handleShowFilters = () => {
    return setShowFilterOptions(!showFilterOptions);
  };

  // Begin van sorteerfunctie:

  const sortBySelect = (type) => {
    const types = {
      title: "original_title",
      movieId: "movie_id",
      vote_count: "vote_count",
    };
    const sortProperty = types[type];

    if (typeof sortProperty === "string") {
      const sortedData = [
        ...filteredData.sort((a, b) =>
          a[sortProperty] > b[sortProperty] ? 1 : -1,
        ),
      ];
      return setFilteredData(sortedData);
    } else if (typeof sortProperty === "number") {
      const sortedData = [
        ...filteredData.sort((a, b) => a[sortProperty] - b[sortProperty]),
      ];
      return setFilteredData(sortedData);
    }
    return setFilteredData(films);
  };
  // Einde van sorteerfunctie.

  // Begin van zoekfunctie obv verschillende properties (Zie github Issue #9)

  // Einde van zoekfunctie obv verschillende properties (Zie github Issue #9)
  return (
    <div>
      <Header>
        <h1>Films Overview</h1>
      </Header>
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
        <div className="filter-holder">
          <select
            name="selectedSortProperty"
            onChange={(e) => sortBySelect(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="title">Title</option>
            <option value="movieId">Movie ID</option>
            <option value="vote_count">Vote Count</option>
          </select>

          <select
            name="SearchByProperty"
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Search By</option>
            <option value="original_title">Title</option>
            <option value="movie_id">Movie ID</option>
          </select>
          <div className="searchbar-holder">
            <input
              className="searchbar"
              type="text"
              onChange={handleFilter}
              placeholder="Searchbar in FilmsList component"
            />
          </div>
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
              </Link>
              <p>Movie ID : {film.movie_id}</p>
            </section>
          ))
        )}
      </main>
    </div>
  );
};

export default DataList;
