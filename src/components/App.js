import React from "react";
import ReactDOM from "react-dom/client";
import RadialChart from "./RadialChart.js";

const data = [
  { label: "A", value: 30 },
  { label: "B", value: 70 },
  { label: "C", value: 45 },
  { label: "D", value: 65 }
];

const App = () => {
  return React.createElement("div", null,
    React.createElement("h2", null, "D3 Radial Chart"),
    React.createElement(RadialChart, { data })
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
