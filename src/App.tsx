import "./styles.scss";
import MyChart from "./MyChart/MyChart";
import React from "react";
import MyResponsiveLine from "./NivoChart/NivoChart";
import {getData} from "./NivoChart/data";
import {StyledChart} from "./NivoChart/NivoChart.style";

function App() {
    const [number, setNumber] = React.useState(15);

  return (
    <div className="App">
      <h1>Temperature logs</h1>
      <h2>React - ChartJS</h2>
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            getData(number);
        }}>
            <input type="number" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNumber(parseInt(event.target.value))}
                   value={number} />
        </form>
      <MyChart number={number} setNumber={setNumber} />
      <h2>React - Nivo</h2>
        <MyResponsiveLine number={number} setNumber={setNumber}  />
    </div>
  );
}

export default App;
