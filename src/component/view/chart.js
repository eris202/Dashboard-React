import React, { useEffect } from "react";
import Chart from "chart.js/auto";

export default function ChartIllustration() {
  useEffect(() => {
    // Chart.defaults.global.elements.rectangle.backgroundColor = '#FF0000';

    var bar_ctx = document.getElementById("bar-chart").getContext("2d");

    var purple_orange_gradient = "#96c1ff";
    //   bar_ctx.createLinearGradient(0, 0, 0, 600);
    // purple_orange_gradient.addColorStop(0, "orange");
    // purple_orange_gradient.addColorStop(1, "purple");

    var bar_chart = new Chart(bar_ctx, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Des",
        ],
        datasets: [
          {
            data: [
              4500,
              9000,
              6000,
              2000,
              7000,
              6000,
              5000,
              4000,
              5000,
              3000,
              7000,
            ],
            backgroundColor: purple_orange_gradient,
            hoverBackgroundColor: "#347ae2",
            hoverBorderWidth: 0,
            hoverBorderColor: "purple",
            borderRadius: 20,
            drawBorder: false,
            drawTicks: false,
            width: 10,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                // beginAtZero: true,
                // display: false,
                // backdropColor: {
                //   // color: "red"
                // },
              },
              grid: {
                borderColor: "#fff",
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas id="bar-chart" width="400" height="200"></canvas>
      {/* <canvas id="line-chart" width="400" height="400"></canvas> */}
    </div>
  );
}
