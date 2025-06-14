import React from "react";
import moment from "moment";
import { LuArrowRight } from "react-icons/lu";

// Components
import TransactionInfo from "../cards/TransactionInfo";

const RecentTransaction = ({ transaction, seeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Recent Transactions</h5>

        <button className="card-btn" onClick={seeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transaction?.slice(0, 5)?.map((item) => (
          <TransactionInfo
            key={item._id}
            title={item.type == "expense" ? item.category : item.source}
            icon={item.icon}
            data={moment(item.date).format("Do MM YYYY")}
            amount={item.amount}
            type={item.type}
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransaction;
