import "../styles/home.css";

function Home() {
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

      {/* MAIN */}
      <div className="home-main">

        <h1 className="home-title">Dashboard</h1>

        {/* SUMMARY CARDS */}
        <div className="home-cards">

          <div className="home-card income">
            <h3>Income</h3>
            <p>฿12,500</p>
          </div>

          <div className="home-card expense">
            <h3>Expense</h3>
            <p>฿4,200</p>
          </div>

          <div className="home-card balance">
            <h3>Balance</h3>
            <p>฿8,300</p>
          </div>

        </div>

        {/* CAT SAVING */}
        <div className="home-saving">

          <img
            src="/cat_coin_drop_transparent.gif"
            alt="saving"
            className="home-cat"
          />

          <div>
            <h2>Piggy Bank</h2>
            <p>You saved ฿8,300 this month</p>
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
                <th>Amount</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>10 Jun</td>
                <td>Salary</td>
                <td>+฿10,000</td>
                <td>Income</td>
              </tr>

              <tr>
                <td>11 Jun</td>
                <td>Food</td>
                <td>-฿200</td>
                <td>Expense</td>
              </tr>

              <tr>
                <td>12 Jun</td>
                <td>Transport</td>
                <td>-฿150</td>
                <td>Expense</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Home;
