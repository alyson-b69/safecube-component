import "./styles.scss";
import MyChart from "./MyChart/MyChart";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Temperature logs</h1>
      <h2>React - ChartJS</h2>
      <MyChart />
    </div>
  );
}

export default App;
