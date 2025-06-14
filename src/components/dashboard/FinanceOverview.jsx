import React from "react";

// Components
import CustomPieChart from "../charts/PieChart";

const Colours = ["#875CF5", "#FF6900", "#FA2C37"];

const FinanceOverview = ({ totalBalance, totalIncome, totalExpenses }) => {
  const data = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Income", amount: totalIncome },
    { name: "Total Expenses", amount: totalExpenses },
  ];
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Finance Overview</h5>
        <CustomPieChart
          data={data}
          label="Total Balance"
          totalAmount={`₹${totalBalance}`}
          colours={Colours}
          showTextAnchor
        />
      </div>
    </div>
  );
};

export default FinanceOverview;
