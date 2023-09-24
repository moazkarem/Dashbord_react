

import React from "react";
import LineData from "./LineData";
import Header from "../Header/Header";

const Line = () => {
  return(
  <div>
 <Header title={'Line Chart'} subtitle={' Welcome To In Line Chart '} />
  <LineData />;
  </div>
  )
};

export default Line;
