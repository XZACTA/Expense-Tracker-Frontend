import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ transactions }) {

  const categoryMap = {};

  transactions.forEach((t) => {

    if (t.type === "expense") {

      if (!categoryMap[t.category]) {
        categoryMap[t.category] = 0;
      }

      categoryMap[t.category] += t.amount;

    }

  });

  const data = {

    labels: Object.keys(categoryMap),

    datasets: [
      {
        data: Object.values(categoryMap),
        backgroundColor: [
          "#ff7675",
          "#74b9ff",
          "#55efc4",
          "#ffeaa7",
          "#a29bfe"
        ]
      }
    ]
  };

  return (
    <div style={{width:"350px"}}>
      <Pie data={data} />
    </div>
  );
}

export default ExpenseChart;