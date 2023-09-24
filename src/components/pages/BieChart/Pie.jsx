/* eslint-disable react/jsx-no-duplicate-props */
import React from "react"
import PieData from "./PieData"
import Header from "../Header/Header"
const Pie = () => {
  
  return (
    <div>
    <Header title={'Pie Chart'} subtitle={' Welcome To In Pie Chart '} />
    <PieData />
    </div>
  )
}

export default Pie
