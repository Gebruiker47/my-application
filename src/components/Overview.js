import DesktopNavigation from "./DesktopNavigation";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Overview = () => {
  const [myFilms, setMyFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      const res = await fetch("https://jsonfakery.com/movies/paginated?page=1");
      const data = await res.json();
      return setMyFilms(data);
    }
    fetchFilms();
  }, []);

  const handleFilter = (e) => {
    const value = e.target.value;
    const filtered = myFilms.data.filter((film) => {
      return film.original_title
        .toLowerCase()
        .includes(value.toLowerCase().trim());
    });
    return setMyFilms(filtered);
  };

  return (
    <div>
      <DesktopNavigation />
      <h1>Overview</h1>
      <div className="searchbar-holder">
        <input
          className="searchbar"
          type="text"
          onChange={handleFilter}
          placeholder="Searchbar in FilmsList component"
        />
      </div>
      <main className="product-list-content">
        {myFilms.data &&
          myFilms.data.map((film) => (
            <section key={film.id} className="product-preview-content">
              <p>{film.original_title}</p>
              <Link to={`/film/${film.id}`}>
                <img src={film.backdrop_path} alt={film.original_title} />
              </Link>
              <p>{film.overview}</p>
            </section>
          ))}
      </main>
    </div>
  );
};

export default Overview;
