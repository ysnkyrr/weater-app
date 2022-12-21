import { useEffect, useState } from "react";
import Background from "./components/Background.js";
import Search from "./components/Search.js";
import Result from "./components/Result.js";
function App() {
  const [airState, setAirState] = useState({});
  return (
    <div className="app">
      <section>
        <Background background = {airState.weather && airState.weather[0].main}/>
        <div id="weather">Hava Durumu</div>
        <Search setAirState={setAirState} />
        <Result air={airState} />
        {/* <Map/> */}
      </section>
    </div>
  );
}
export default App;
