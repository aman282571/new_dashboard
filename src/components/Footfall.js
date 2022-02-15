import React, { useState } from "react";
import Navbar from "./Navbar";
import DisplayLineChart from "./DisplayLineChart";

// entry func
// this function work is only to render displaylinechart component with monthly and xAxis  data
function Footfall({ footfall }) {
  function showData() {
    let print = [];
    footfall.forEach((monthData) => {
      print.push(
        <div key={monthData[0]} className="column">
          <h2>{monthData[0]}</h2>
          <DisplayLineChart month={monthData[1]} xAxis="date" />
        </div>
      );
    });
    // for (let month in footfall) {
    //   print.push(
    //     <div key={month} className="column">
    //       <h2>{month}</h2>
    //       <DisplayLineChart month={footfall[month]} xAxis="date" />
    //     </div>
    //   );
    // }
    return print;
  }
  return (
    <>
      <Navbar />
      <div className="mt-3 p-0">
        <p className="info">
          We have <strong> {footfall.length}</strong> months's data
        </p>
        <div className="g-0 row">{showData()}</div>
      </div>
    </>
  );
}

export default Footfall;
