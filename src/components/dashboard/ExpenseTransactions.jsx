import React from "react";
import moment from "moment";
import { LuArrowRight } from "react-icons/lu";

// Componetns
import TransactionInfo from "../cards/TransactionInfo";

const ExpenseTransactions = ({ transaction, seeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Expenses</h5>

        <button className="card-btn" onClick={seeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transaction?.slice(0, 5)?.map((expense) => (
          <TransactionInfo
            key={expense._id}
            title={expense.category}
            icon={expense.icon}
            data={moment(expense.date).format("Do MM YYYY")}
            amount={expense.amount}
            type={expense.type}
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseTransactions;
