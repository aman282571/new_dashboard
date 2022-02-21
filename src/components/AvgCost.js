import React, { useState } from "react";
import DisplayLineChart from "./DisplayLineChart";

import Navbar from "./Navbar";

function Avgcost({ avgcost }) {
  const [ub, setUb] = useState(1);
  function setNewUb(e) {
    setUb(parseInt(e.target.value));
  }
  function selectOption() {
    let years = Math.ceil(avgcost["months"].length / 12);
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
    let print = {};
    for (let field in avgcost) {
      print[field] = avgcost[field].slice(
        (ub - 1) * 12,
        Math.min(avgcost["months"].length, ub * 12)
      );
    }
    return (
      <div className="column full-width">
        <h2>avgcost</h2>
        <DisplayLineChart
          month={print}
          xAxis="months"
          showTheseDays={{ field: "aman" }}
          footfall={false}
        />
      </div>
    );
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

export default Avgcost;
