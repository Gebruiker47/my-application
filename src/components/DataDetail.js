import { Link, useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import AppButton from "../custom-components/AppButton";
import Header from "../custom-components/Header";
import DesktopNavigation from "./DesktopNavigation";
const DataDetail = () => {
  const { id } = useParams();
  const { data: films } = useFetch(`http://localhost:8000/films/${id}`);
  return (
    <div>
      {films && (
        <div>
          <DesktopNavigation />
          <Header>
            <h1>Overview details</h1>
          </Header>
          <div className="product-detail-content">
            <Link to={"/"}>
              <AppButton>Terug</AppButton>
            </Link>
            <h1>{films.original_title}</h1>
            <p>{films.overview}</p>
            <img
              src={films.backdrop_path}
              alt={films.original_title}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DataDetail;
