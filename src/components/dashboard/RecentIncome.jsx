import React from "react";
import moment from "moment";
import { LuArrowRight } from "react-icons/lu";

// Componetns
import TransactionInfo from "../cards/TransactionInfo";

const RecentIncome = ({ transaction, seeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Income</h5>

        <button className="card-btn" onClick={seeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transaction?.slice(0, 5)?.map((income) => (
          <TransactionInfo
            key={income._id}
            title={income.source}
            icon={income.icon}
            data={moment(income.date).format("Do MM YYYY")}
            amount={income.amount}
            type="income"
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

export default RecentIncome;
