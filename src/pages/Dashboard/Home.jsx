import React from "react";

// Components
import DashboardLayout from "../../components/layout/Dashboard";

const Home = () => {
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">Home</div>
    </DashboardLayout>
  );
};

export default Home;
