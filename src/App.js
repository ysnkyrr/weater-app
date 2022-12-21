import { useEffect, useState } from "react";
import Background from "./components/Background.js";
import Search from "./components/Search.js";
import Result from "./components/Result.js";
import Map from "./components/Map.js";
function App() {
  const [airState, setAirState] = useState({});
  const [searchParam, setSearchParam] = useState("");
  function scrollWin() {
    if (typeof window !== undefined) {
      window.scrollBy(0, 2000);
    }
  }
  return (
    <div className="app">
      <section>
        <Background background = {airState.weather && airState.weather[0].main}/>
        <div id="weather">Hava Durumu</div>
        <Map setSearchParam={setSearchParam} setAirState={setAirState} onClick = {scrollWin()} />
        <Search setAirState={setAirState}  searchParam = {searchParam} setSearchParam = {setSearchParam} />
        <Result air={airState} />
        
      </section>
    </div>
  );
}
export default App;
