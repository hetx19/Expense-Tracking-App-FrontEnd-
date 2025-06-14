import React, { useState, useEffect } from "react";

// Components
import CustomBarGraph from "../charts/BarGraph";

// Utils
import { prepareExpenseBarChartData } from "../../utils/helper";

const Last30DaysExpenses = ({ data }) => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseBarChartData(data);
    setGraphData(result);

    return () => {};
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <div className="text-lg">Last 30 Days Expenses</div>
      </div>

      <CustomBarGraph data={graphData} />
    </div>
  );
};

export default Last30DaysExpenses;
