import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function MonthlyChart({ transactions }) {

  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {

    if (t.type === "income") income += t.amount;
    if (t.type === "expense") expense += t.amount;

  });

  const data = {

    labels: ["Income", "Expense"],

    datasets: [
      {
        label: "This Month",
        data: [income, expense],
        backgroundColor: ["#2ecc71", "#e74c3c"]
      }
    ]
  };

  return (
    <div style={{width:"400px"}}>
      <Bar data={data} />
    </div>
  );
}

export default MonthlyChart;