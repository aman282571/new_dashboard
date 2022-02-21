import React from "react";
import strokes from "./StrokeGen";
import { makeDataSets, retrieveFields } from "./helperFuntions";
import useCheckBoxes from "./useCheckBoxes";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// entry function
function DisplayLineChart({ month, xAxis, showTheseDays, footfall }) {
  const [showTheseFields, showCheckBoxes] = useCheckBoxes(() =>
    retrieveFields(month, xAxis)
  );
  let dataSets = makeDataSets(
    month,
    showTheseFields,
    xAxis,
    showTheseDays,
    footfall
  );
  let LineData = [];
  let i = 0;
  for (let ele in dataSets[0]) {
    if (ele != xAxis) {
      LineData.push(
        <Line
          type="monotone"
          dataKey={ele}
          strokeWidth={2}
          stroke={strokes[i++]}
          key={ele}
        />
      );
    }
  }
  return (
    <>
      <div className="select-fields">{showCheckBoxes()}</div>
      <ResponsiveContainer width="100%" height={700}>
        <LineChart data={dataSets}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxis} />
          <YAxis />
          <Tooltip />
          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={{ position: "relative" }}
          />
          {LineData}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default DisplayLineChart;
