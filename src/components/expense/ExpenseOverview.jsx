import React, { useState, useEffect } from "react";
import { LuPlus } from "react-icons/lu";

// Components
import CustomLineChart from "../charts/LineChart";

// Utils
import { prepareExpenseLineChartData } from "../../utils/helper";

const ExpenseOverview = ({ transaction, addExpense }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseLineChartData(transaction);
    setChartData(result);

    return () => {};
  }, [transaction]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-lg">Expense Overview</h5>
          <p className="text-xs text-gray-400 mt-0.5">
            Track your spendind trends over time and gain insights into where
            your money goes.
          </p>
        </div>
        <button onClick={addExpense} className="add-btn">
          <LuPlus className="text-lg" />
          Add Expense
        </button>
      </div>

      <div className="mt-10">
        <CustomLineChart data={chartData} />
      </div>
    </div>
  );
};

export default ExpenseOverview;
