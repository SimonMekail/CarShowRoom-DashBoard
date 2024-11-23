import { useEffect } from "react";

import { Chart } from "chart.js/auto";

const HorizontalBarChart = () => {
  useEffect(() => {
    const ctx = document.getElementById("horizontalBarChart");

    const labels = ["a", "b", "c", "d"];

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Best Car ShowRoom",
          data: [65, 59, 80, 81],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const config = {
      type: "bar",
      data: data,
      options: {
        indexAxis: "y",
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: "right",
          },
          title: {
            display: true,
            text: "Chart.js Horizontal Bar Chart",
          },
        },
      },
    };

    new Chart(ctx, config);
  }, []);

  return (
    <div className="col bg-body-secondary mx-5 my-2 ">
      <canvas id="horizontalBarChart"></canvas>
    </div>
  );
};
export default HorizontalBarChart;
