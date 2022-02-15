import React from "react";
import DisplayLineChart from "./DisplayLineChart";

import Navbar from "./Navbar";

function Expenses({ expenses }) {
  function showData() {
    let print = [];
    print.push(
      <div key="expenses" className="column full-width">
        <h2>Expenses</h2>
        <DisplayLineChart month={expenses} xAxis="months" />
      </div>
    );
    return print;
  }
  return (
    <>
      <Navbar />
      <div className="mt-3 p-0">
        <p className="info">
          We have <strong> {expenses.months.length}</strong> months's data
        </p>
        <div className="g-0 row">{showData()}</div>
      </div>
    </>
  );
}

export default Expenses;
