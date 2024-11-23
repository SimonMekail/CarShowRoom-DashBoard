import { useEffect } from "react";

import { Chart } from "chart.js/auto";

const LineChart = () => {
  useEffect(() => {
    const ctx = document.getElementById("lineChart");

    const labels = ["a", "b", "c", "d", "e", "f", "g", "h"];

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Sold Cars",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
    };

    new Chart(ctx, config);
  }, []);

  return (
    <div className="col bg-body mx-5 my-2 shadow-lg rounded-4">
      <canvas id="lineChart"></canvas>
    </div>
  );
};
export default LineChart;
