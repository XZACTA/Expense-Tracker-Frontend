import "../styles/home.css";
import { useEffect, useState } from "react";
import API from "../services/api";
import ExpenseChart from "../components/ExpenseChart";
import MonthlyChart from "../components/MonthlyChart";

function Home() {

  const [transactions, setTransactions] = useState([]);

  const [summary, setSummary] = useState({
    income: 0,
    expense: 0,
    balance: 0
  });


  const [showModal, setShowModal] = useState(false);

const [form, setForm] = useState({
  title: "",
  amount: "",
  type: "",
  category: "",
  date: ""
});

  const openModal = (type) => {

  setForm({
    title: "",
    amount: "",
    type,
    category: "",
    date: new Date().toISOString().slice(0,10)
  });

  setShowModal(true);

};

const closeModal = () => {
  setShowModal(false);
};

const handleChange = (e) => {

  setForm({
    ...form,
    [e.target.name]: e.target.value
  });

};

const addTransaction = async (e) => {

  e.preventDefault();

  try {

    await API.post("/transactions", form);

    closeModal();

    fetchTransactions(); // reload table

  } catch (error) {

    console.log(error);

  }

};

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {

    try {

      const res = await API.get("/transactions");

      const data = res.data;

      setTransactions(data);

      let income = 0;
      let expense = 0;

      data.forEach((t) => {

        if (t.type === "income") {
          income += t.amount;
        }

        if (t.type === "expense") {
          expense += t.amount;
        }

      });

      setSummary({
        income,
        expense,
        balance: income - expense
      });

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="home-container">

      {/* SIDEBAR */}
      <div className="home-sidebar">

        <h2 className="home-logo">🐱 MoneyCat</h2>

        <ul className="home-menu">
          <li>Dashboard</li>
          <li>Income</li>
          <li>Expense</li>
          <li>Savings</li>
          <li>Profile</li>
        </ul>

      </div>

      {showModal && (

  <div className="modal-overlay">

    <div className="modal-box">

      <h2>Add {form.type}</h2>

      <form onSubmit={addTransaction}>

        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
        />

        <select
  name="category"
  value={form.category}
  onChange={handleChange}
>

  <option value="">Select Category</option>

  {form.type === "income" && (
    <>
      <option value="salary">Salary</option>
      <option value="freelance">Freelance</option>
      <option value="investment">Investment</option>
      <option value="other">Other</option>
    </>
  )}

  {form.type === "expense" && (
    <>
      <option value="food">Food</option>
      <option value="transport">Transport</option>
      <option value="shopping">Shopping</option>
      <option value="bills">Bills</option>
      <option value="entertainment">Entertainment</option>
      <option value="other">Other</option>
    </>
  )}

</select>

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />

        <div className="modal-buttons">

          <button type="submit">
            Save
          </button>

          <button type="button" onClick={closeModal}>
            Cancel
          </button>

        </div>

      </form>

    </div>

  </div>

)}

      {/* MAIN */}
      <div className="home-main">

        <h1 className="home-title">Dashboard</h1>

        {/* SUMMARY CARDS */}
        <div className="home-cards">

          <div className="home-card income">
            <h3>Income</h3>
            <p>฿{summary.income}</p>
          </div>

          <div className="home-card expense">
            <h3>Expense</h3>
            <p>฿{summary.expense}</p>
          </div>

          <div className="home-card balance">
            <h3>Balance</h3>
            <p>฿{summary.balance}</p>
          </div>

        </div>

        <div className="home-actions">

          <button
            className="action-income"
            onClick={() => openModal("income")}
          >
            + Add Income
          </button>

          <button
            className="action-expense"
            onClick={() => openModal("expense")}
          >
            + Add Expense
          </button>

        </div>

        {/* CAT SAVING */}
        <div className="home-saving">

          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzNvY3ZibHFvcnQ1YnN2c2ZxbXVrbXg4eGozZWN3Y3FmOGd5c3FpdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jsxpFvPXEU2ByvfBkM/giphy.gif"
            alt="saving"
            className="home-cat"
          />

          <div>
            <h2>Piggy Bank</h2>
            <p>You saved ฿{summary.balance} this month</p>
          </div>

        </div>

        <div className="home-charts">

  <div className="chart-card">
    <h3>Expense Categories</h3>
    <ExpenseChart transactions={transactions} />
  </div>

  <div className="chart-card">
    <h3>Income vs Expense</h3>
    <MonthlyChart transactions={transactions} />
  </div>

</div>

        {/* TRANSACTION TABLE */}

        <div className="home-table">

          <h2>Recent Transactions</h2>

          <table>

            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>

              {transactions.map((t) => (

                <tr key={t._id}>

                  <td>
                    {new Date(t.date).toLocaleDateString()}
                  </td>

                  <td>{t.title}</td>

                  <td>{t.category}</td>

                  <td>
                    {t.type === "income" ? "+" : "-"}฿{t.amount}
                  </td>

                  <td>{t.type}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Home;



