import { Line } from "react-chartjs-2";

export const LineChart = ({ options, data }) => {
  return <Line options={options} data={data} />;
};
