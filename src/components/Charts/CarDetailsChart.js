import { useEffect } from "react";

import { Chart } from "chart.js/auto";

const CarDetailsChart = () => {
  useEffect(() => {
    const ctx = document.getElementById("carDetailsChart");

    const labels = ["Speed", "Brakes", "Fuel Tank"];

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Car Details",
          data: [65, 59, 80],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(75, 192, 192)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const config = {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    new Chart(ctx, config);
  }, []);

  return (
    <div className="col bg-body-secondary">
      <canvas id="carDetailsChart"></canvas>
    </div>
  );
};
export default CarDetailsChart;
