import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../api/getData";
import { getLast30Days } from "./Date";

const GState = createContext();

export default function Context({ children }) {
  const apiKey = "5lXjrcsmVH7BCXhdhr98EC6nazMucvvS";
  const [data1, setData1] = useState();
  const [egp, setEgp] = useState({ data: "", label: "" });
  const [eur, setEur] = useState({ data: "", label: "" });
  const [gbp, setGbp] = useState({ data: "", label: "" });
  const [mode, setMode] = useState(false);
  const [sideStatus, setSideStatus] = useState(false);
  const { startDate, endDate } = getLast30Days();

  useEffect(() => {
    fetchData({
      apiKey,
      base: "USD",
      symbol: "EUR",
      startDate,
      endDate,
    })
      .then(({ rates }) => {
        setData1({ lables: Object.keys(rates), value: Object.values(rates) });
      })
      .catch((e) => {
        console.log(e);
      });

    fetchData({
      apiKey,
      symbol: "EGP",
      phase: 2,
    })
      .then(({ date, rates }) => {
        setEgp({ data: date, label: rates["EGP"] });
      })
      .catch((e) => {
        console.log(e);
      });

    fetchData({
      apiKey,
      symbol: "GBP",
      phase: 2,
    })
      .then(({ date, rates }) => {
        setGbp({ data: date, label: rates["GBP"] });
      })
      .catch((e) => {
        console.log(e);
      });
    fetchData({
      apiKey,
      symbol: "EUR",
      phase: 2,
    })
      .then(({ date, rates }) => {
        setEur({ data: date, label: rates["EUR"] });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <GState.Provider
      value={{
        boxData_1: data1,
        mode,
        setMode,
        setSideStatus,
        sideStatus,
        boxData_2: {
          data: [egp.data, eur.data, gbp.data],
          labels: [egp.label, eur.label, gbp.label],
        },
      }}
    >
      {children}
    </GState.Provider>
  );
}

export const getState = () => {
  return useContext(GState);
};
