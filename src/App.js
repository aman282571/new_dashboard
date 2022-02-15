import { useState, useEffect } from "react";
import "./app.css";
import Loader from "./components/helpers/Loader";
import Error from "./components/helpers/Error";
import Footfall from "./components/Footfall";
import Expenses from "./components/Expenses";
import AvgCost from "./components/AvgCost";
import NotFound from "./components/helpers/NotFound";
import addAvgCostToStore from "./data";
import { Routes, Route } from "react-router-dom";
import firedb from "./components/firebase";
function App() {
  const [state, setState] = useState({
    isLoading: true,
    isError: false,
    store: "",
  });
  useEffect(() => {
    // fethcing data from firebase
    firedb
      .child("/")
      .once("value")
      .then((snapshot) => {
        if (snapshot.val() != null) {
          let data = snapshot.val();

          addAvgCostToStore(data);
          setState({ isLoading: false, isError: false, store: data });
        }
      })
      .catch((error) => {
        console.log(error);
        setState({ isLoading: false, isError: true, store: "" });
      });
  }, []);
  return (
    <>
      {state.isLoading && <Loader />}
      {state.isError && <Error />}
      {!state.isLoading && !state.isError && (
        <Routes>
          <Route
            path="/"
            element={<Footfall footfall={state.store.footfall} />}
          />
          <Route
            path="/expenses"
            element={<Expenses expenses={state.store.expenses} />}
          />
          <Route
            path="/avgcost"
            element={<AvgCost avgcost={state.store.avgcost} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
