import { useState, useEffect } from "react";
import "./app.css";
import Loader from "./components/helpers/Loader";
import Error from "./components/helpers/Error";
import Footfall from "./components/Footfall";
import Expenses from "./components/Expenses";
import AvgCost from "./components/AvgCost";
import NotFound from "./components/helpers/NotFound";
import addAvgCostToStore from "./data";
import { data } from "./data";

import { Routes, Route } from "react-router-dom";
import firedb from "./components/firebase";
function App() {
  const [state, setState] = useState({
    isLoading: true,
    isError: false,
    store: "",
    index: 0,
  });
  useEffect(() => {
    // fethcing data from firebase
    firedb
      .child("/")
      .once("value")
      .then((snapshot) => {
        if (snapshot.val() != null) {
          let data = snapshot.val();
          data.forEach((eachCenter) => {
            addAvgCostToStore(eachCenter[1]);
          });
          // console.log(data);
          setState({ isLoading: false, isError: false, store: data, index: 0 });
        }
      })
      .catch((error) => {
        console.log(error);
        setState({ isLoading: false, isError: true, store: "" });
      });
    // data.forEach((eachCenter) => {
    //   addAvgCostToStore(eachCenter[1]);
    //   setState({ isLoading: false, isError: false, store: data, index: 0 });
    // });
  }, []);
  function changeCenter(e) {
    setState({ ...state, index: parseInt(e.target.value) });
  }
  return (
    <>
      {state.isLoading && <Loader />}
      {state.isError && <Error />}
      {!state.isLoading && !state.isError && (
        <>
          <div className="header">
            <h1>{state.store[state.index][0]}</h1>
            <select onChange={changeCenter} value={state.store.index}>
              {state.store.map((indiCenter, index) => {
                return (
                  <option key={index} value={index}>
                    {indiCenter[0]}
                  </option>
                );
              })}
            </select>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <Footfall
                  footfall={state.store[state.index][1].footfall}
                  key={`footfall+${state.store[state.index][0]}`}
                />
              }
            />
            <Route
              path="/expenses"
              element={
                <Expenses
                  expenses={state.store[state.index][1].expenses}
                  key={`expenses+${state.store[state.index][0]}`}
                />
              }
            />
            <Route
              path="/avgcost"
              element={
                <AvgCost
                  avgcost={state.store[state.index][1].avgcost}
                  key={`avgcostl+${state.store[state.index][0]}`}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
