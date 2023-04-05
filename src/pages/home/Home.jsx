import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.scss";
import Widget from "../../components/widgets/Widget";
import Featured from "../../components/featured/Featured";
import Charts from "../../components/charts/Charts";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default Home;
