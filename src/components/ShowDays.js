import React, { useState } from "react";
import DisplayLineChart from "./DisplayLineChart";

// entry func
// render monthdata in footfall with days
function ShowDays({ monthData }) {
  const [days, setDays] = useState({
    Mon: true,
    Tues: true,
    Wed: true,
    Thurs: true,
    Fri: true,
    Sat: true,
    Sun: true,
  });
  console.log(days);
  function setValue(ele) {
    setDays((prev) => {
      return { ...prev, [ele]: !prev[ele] };
    });
  }
  function showCheckBoxes() {
    let arr = [];
    for (let ele in days) {
      arr.push(
        <p key={ele}>
          <input
            type="checkbox"
            checked={days[ele]}
            onChange={() => setValue(ele)}
          />
          {ele}
        </p>
      );
    }
    return arr;
  }

  return (
    <div className="column">
      <h2>{monthData[0]}</h2>
      <div className="select-fields">{showCheckBoxes()}</div>
      <DisplayLineChart
        month={monthData[1]}
        xAxis="date"
        showTheseDays={days}
        footfall={true}
      />
    </div>
  );
}

export default ShowDays;
