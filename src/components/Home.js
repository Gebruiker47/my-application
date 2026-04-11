import React, { useState } from "react";
import DesktopNavigation from "./DesktopNavigation";
import AppButton from "../custom-components/AppButton";
import useFetch from "../customHooks/useFetch";
import DataList from "./DataList";

const Home = () => {
  const [show, setShow] = useState(true);
  const { data: films, isPending } = useFetch("http://localhost:8000/films/");

  const handleShow = () => {
    return setShow(!show);
  };
  return (
    <div>
      <DesktopNavigation />
      <AppButton
        customClick={handleShow}
        className={`${!show ? "danger" : ""}`}
      >
        Test Button
      </AppButton>

      {show ? "Goed" : "Niet goed"}

      {films && <DataList films={films} />}
    </div>
  );
};

export default Home;
