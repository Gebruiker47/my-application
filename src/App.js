import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Overview from "./components/Overview";
import DataDetail from "./components/DataDetail";
import MyDashboard from "./components/MyDashboard";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/overview" element={<Overview />}></Route>
          <Route path="/film/:id" element={<DataDetail />}></Route>
          <Route path="dashboard" element={<MyDashboard />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
