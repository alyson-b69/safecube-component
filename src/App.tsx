import "./styles.scss";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from "./RootComponents/Header/Header";
import TemperatureCharts from "./Pages/TempertureCharts";
import Shipments from "./Pages/Shipments";
import ChartV2 from "./Pages/ChartV2";
import Home from "./Pages/Home";
import AviExp from "./Pages/AviExp";


function App() {


  return (
      <Router>
    <div className="App">
        <Header />
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/liste">
                <Shipments />
            </Route>
            <Route path="/charts">
                <TemperatureCharts />
            </Route>
            <Route path="/chartsv2">
                <ChartV2 />
            </Route>
            <Route path="/aviexp">
                <AviExp />
            </Route>
        </Switch>
    </div>
      </Router>
  );
}

export default App;
