import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Overview from "./components/Overview";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/overview" element={<Overview />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
