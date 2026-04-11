import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

const DataDetail = () => {
  const { id } = useParams();
  const { data: films } = useFetch(`http://localhost:8000/films/${id}`);
  return (
    <div>
      {films && (
        <img
          src={films.backdrop_path}
          style={{ float: "left", width: "600px", height: "auto" }}
        />
      )}
    </div>
  );
};

export default DataDetail;
