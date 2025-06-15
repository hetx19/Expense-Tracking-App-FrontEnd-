import React, { useState, useEffect } from "react";
import { LuPlus } from "react-icons/lu";

// Components
import CustomBarGraph from "../charts/BarGraph";

// Utils
import { prepareIncomeBarGraphData } from "../../utils/helper";

const IncomeOverview = ({ transaction, addIncome }) => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarGraphData(transaction);
    setGraphData(result);

    return () => {};
  }, [transaction]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div className="">
          <h5 className="text-lg">Income Overview</h5>
          <p className="text-xs text-gray-400 mt-0.5">
            Track your earning over time and analyse your income trends
          </p>
        </div>
        <button onClick={addIncome} className="add-btn">
          <LuPlus className="text-lg" />
          Add Income
        </button>
      </div>

      <div className="mt-10">
        <CustomBarGraph data={graphData} />
      </div>
    </div>
  );
};

export default IncomeOverview;
