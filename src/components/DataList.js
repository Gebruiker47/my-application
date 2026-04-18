import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../custom-components/Alert";
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

      <main className="product-list-content">
        {filteredData.length === 0 ? (
          <Alert className="danger">Nothing Found</Alert>
        ) : (
          filteredData.map((film) => (
            <section key={film.id} className="product-preview-content">
              <p>{film.original_title}</p>
              <Link to={`/film/${film.id}`}>
                <img src={film.backdrop_path} alt={film.original_title} />
                <p>{film.original_title}</p>
              </Link>
            </section>
          ))
        )}
      </main>
    </div>
  );
};

export default DataList;
