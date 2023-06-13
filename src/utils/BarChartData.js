import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const getChartData = ({ labels, data, title }) => {
  const initColors = ["rgba(255, 99, 132, 0.5)", "#8653a1", "#2d99d7"];
  const BarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const BarData = {
    labels: data,
    datasets: labels.map((e, i) => {
      return {
        label: e,
        data: [e],
        backgroundColor: initColors[i],
      };
    }),
  };

  return { BarOptions, BarData };
};
