import React, { useState } from "react";
import Navbar from "./Navbar";
import ShowDays from "./ShowDays";

// entry func
// this function work is only to render displaylinechart component with monthly and xAxis  data
function Footfall({ footfall }) {
  const [ub, setUb] = useState(1);

  function setNewUb(e) {
    setUb(parseInt(e.target.value));
  }
  function selectOption() {
    let years = Math.ceil(footfall.length / 12);
    let printYears = [];
    for (let i = 0; i < years; i++) {
      printYears.push(
        <option key={i} value={i + 1}>
          Year {2021 + i}
        </option>
      );
    }
    return printYears;
  }
  function showData() {
    let print = [];
    footfall
      .slice((ub - 1) * 12, Math.min(footfall.length, ub * 12))
      .forEach((monthData) => {
        print.push(<ShowDays key={monthData[0]} monthData={monthData} />);
      });
    return print;
  }
  return (
    <>
      <Navbar />
      <select value={ub} onChange={setNewUb}>
        {selectOption()}
      </select>
      <div className="mt-3 p-0">
        <div className="g-0 row">{showData()}</div>
      </div>
    </>
  );
}

export default Footfall;
