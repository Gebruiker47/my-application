import { Link, useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import AppButton from "../custom-components/AppButton";

const DataDetail = () => {
  const { id } = useParams();
  const { data: films } = useFetch(`http://localhost:8000/films/${id}`);
  return (
    <div>
      {films && (
        <div>
          <h1>{films.original_title}</h1>
          <p>{films.overview}</p>
          <img
            src={films.backdrop_path}
            alt={films.original_title}
            style={{ float: "left", width: "600px", height: "auto" }}
          />
        </div>
      )}
      <Link to={"/"}>
        <AppButton>Terug</AppButton>
      </Link>
    </div>
  );
};

export default DataDetail;
