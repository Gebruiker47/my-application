import DesktopNavigation from "./DesktopNavigation";
import useFetch from "../customHooks/useFetch";
import DataList from "./DataList";

const Home = () => {
  const { data: films, isPending } = useFetch("http://localhost:8000/films/");

  return (
    <div>
      <DesktopNavigation />
      {isPending && (
        <div>
          <p>
            Is de endpoint goed? Propeer in VS-code de volgende code in een
            nieuwe Terminal te runnen:
          </p>
          <b>Npx json-server --watch data/films.json --port 8000</b>
        </div>
      )}
      {films && <DataList films={films} />}
    </div>
  );
};

export default Home;
