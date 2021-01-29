import "./styles.scss";
import React from "react";

import TemperatureCharts from "./Pages/TempertureCharts";
import Shipments from "./Pages/Shipments";

function App() {


  return (
    <div className="App">
        <Shipments />
        <TemperatureCharts />
    </div>
  );
}

export default App;
