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

const url = process.env.PUBLIC_URL;

function App() {


  return (
      <Router>
    <div className="App">
        <Header />
        <Switch>
            <Route exact path={url}>
                <Home/>
            </Route>
            <Route path={url + 'liste'}>
                <Shipments />
            </Route>
            <Route path={url + 'charts'}>
                <TemperatureCharts />
            </Route>
            <Route path={url + 'chartsv2'}>
                <ChartV2 />
            </Route>
            <Route path={url + 'aviexp'}>
                <AviExp />
            </Route>
        </Switch>
    </div>
      </Router>
  );
}

export default App;
