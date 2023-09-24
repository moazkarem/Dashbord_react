import React from "react";
import BarData from "./BarData";
import Header from "../Header/Header";




const BarChart = () => {
  
  return (
    <div>
    <Header  title={'Bar Chart'} subtitle={' Welcome To In Bar Chart '} />
    <BarData />
    </div>
  );
};

export default BarChart;
