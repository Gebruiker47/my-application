import React, { useEffect, useState } from "react";
import Header from "../custom-components/Header";

import { Bar, Doughnut, Pie } from "react-chartjs-2";
import {
  Chart,
  BarController,
  BarElement,
  Colors,
  plugins,
} from "chart.js/auto";
import DesktopNavigation from "./DesktopNavigation";

Chart.register(BarController, BarElement, Colors);
export default function MyDashboard() {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/films/")
      .then((response) => response.json())
      .then((data) => setFilteredData(data));
  }, []);
  const size = 20;
  return (
    <div>
      <DesktopNavigation />
      <Header>
        <h1>My Dashboard</h1>
      </Header>

      <div className="main-dashboard-content">
        <div className="sub-dashboard-content">
          <Bar
            data={{
              labels: filteredData
                .slice(0, size)
                .map((film) => film.original_title),
              datasets: [
                {
                  label: "Film vote average",
                  data: filteredData
                    .slice(0, size)
                    .map((film) => film.vote_average),
                },
              ],
            }}
          />
        </div>

        <div className="sub-dashboard-content">
          <Pie
            data={{
              labels: filteredData
                .slice(0, size)
                .map((film) => film.original_title),
              datasets: [
                {
                  label: "Film vote average",
                  data: filteredData
                    .slice(0, size)
                    .map((film) => film.vote_average),
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}
