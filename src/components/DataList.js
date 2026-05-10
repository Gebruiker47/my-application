import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../custom-components/Alert";
import AppButton from "../custom-components/AppButton";
import Header from "../custom-components/Header";
const DataList = ({ films }) => {
  const [filteredData, setFilteredData] = useState(films);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selected, setSelected] = useState("");
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setDisable(disable);
  }, [disable]);

  // Begin van zoekfunctie obv verschillende properties (Zie github Issue #9)
  const [warning, setWarning] = useState("");

  const handleFilter = (e) => {
    const value = e.target.value;
    const filtered = films.filter((film) => {
      const title = film.original_title
        .toLowerCase()
        .includes(value.toLowerCase().trim());

      const movieID = film.movie_id
        .toString()
        .includes(value.toString().trim());

      // if (selected) {
      if (selected === "original_title") {
        setWarning("");
        return title;
      } else if (selected === "movie_id") {
        setWarning("");
        return movieID;
      } else if (selected === "" && filteredData !== 0) {
        return setWarning(<Alert className="warning">Kies een optie</Alert>);
      } else {
        return setFilteredData(filtered);
      }
      // }
    });
    return setFilteredData(filtered);
  };
  // Einde van zoekfunctie obv verschillende properties (Zie github Issue #9)

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

  const handleShowFilters = () => {
    return setShowFilterOptions(!showFilterOptions);
  };

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
            className={`${selected ? "" : "test"}`}
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
              placeholder={selected ? "Zoek naar een item" : "Kies een optie!"}
              disabled={selected ? disable : !disable}
            />
          </div>
          <select
            name="SortByProperty"
            onChange={(e) => sortBySelect(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="title">Title</option>
            <option value="movieId">Movie ID</option>
            <option value="vote_count">Vote Count</option>
          </select>
          {warning}
        </div>
      )}

      <main className="product-list-content">
        {filteredData.length === 0 && selected !== "" ? (
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
