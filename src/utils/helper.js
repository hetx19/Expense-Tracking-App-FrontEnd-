import moment from "moment";

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getIntials = (name) => {
  if (!name) {
    return "";
  }

  const words = name.split(" ");
  let initial = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initial += words[i][0];
  }

  return initial.toUpperCase();
};

export const addThousandsSeparator = (value) => {
  if (!value || isNaN(value)) {
    return "";
  }

  const [IP, FP] = value.toString().split(".");
  const formattedI = IP.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return FP ? `${formattedI}.${FP}` : formattedI;
};

export const prepareExpenseBarGraphData = (data = []) => {
  const graphData = data.map((item) => ({
    category: item?.category,
    amount: item?.amount,
  }));

  return graphData;
};

export const prepareIncomeBarGraphData = (data = []) => {
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const graphData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    amount: item?.amount,
    source: item?.source,
  }));

  return graphData;
};

export const prepareExpenseLineChartData = (data = []) => {
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    amount: item?.amount,
    category: item?.category,
  }));

  return chartData;
};
