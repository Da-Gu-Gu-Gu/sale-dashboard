import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }: any) => {
  const labels = data.map((d: any) => d.date);
  const values = data.map((d: any) => d.value);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)", // Softer light blue
          "rgba(41, 128, 185, 0.7)", // Softer darker blue
          "rgba(33, 150, 243, 0.7)", // Softer vivid blue
          "rgba(100, 181, 246, 0.7)", // Softer pastel blue
          "rgba(0, 137, 209, 0.7)", // Softer deep blue
          "rgba(173, 216, 230, 0.7)", // Softer sky blue
        ],
        borderColor: [
          "rgba(54, 162, 235, 0.8)", // Slightly darker blue for border
          "rgba(41, 128, 185, 0.8)", // Slightly darker blue for border
          "rgba(33, 150, 243, 0.8)", // Slightly darker blue for border
          "rgba(100, 181, 246, 0.8)", // Slightly darker blue for border
          "rgba(0, 137, 209, 0.8)", // Slightly darker blue for border
          "rgba(173, 216, 230, 0.8)", // Slightly darker blue for border
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full h-[90%]">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
