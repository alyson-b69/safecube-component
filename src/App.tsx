import "./styles.scss";
import MyChart from "./MyChart/MyChart";
import React from "react";
import MyResponsiveLine from "./NivoChart/NivoChart";

function App() {
  return (
    <div className="App">
      <h1>Temperature logs</h1>
      <h2>React - ChartJS</h2>
      <MyChart />
      <h2>React - Nivo</h2>
        <MyResponsiveLine />
    </div>
  );
}

export default App;
