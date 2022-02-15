import React from "react";
import DisplayLineChart from "./DisplayLineChart";

import Navbar from "./Navbar";

function Avgcost({ avgcost }) {
  function showData() {
    let print = [];
    print.push(
      <div key="expenses" className="column full-width">
        <h2>Avg Cost</h2>
        <DisplayLineChart month={avgcost} xAxis="months" />
      </div>
    );
    return print;
  }
  return (
    <>
      <Navbar />
      <div className="mt-3 p-0">
        <p className="info">We have {avgcost.months.length} months's data</p>
        <div className="g-0 row">{showData()}</div>
      </div>
    </>
  );
}

export default Avgcost;
