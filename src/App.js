import { useEffect, useRef, useState } from "react";
import Background from "./components/Background.js";
import Search from "./components/Search.js";
import Result from "./components/Result.js";
import Map from "./components/Map.js";
import Navbar from "./components/Navbar.js";
function App() {
  const [airState, setAirState] = useState({});
  const [searchParam, setSearchParam] = useState("");
  const ref = useRef(null);

  const handleButtonClick = () => {
    if (ref) {
      setTimeout(() => {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }, 100);
    }
  };

  console.log(airState);
  return (
    <div className="app">
      <section>
        <Navbar />
        <Background background={airState.weather && airState.weather[0].main} />
        <div id="weather">
          Hava durumunu öğrenmek istediğiniz şehre tıklamanız yeterli.
        </div>
        <Map
          setSearchParam={setSearchParam}
          setAirState={setAirState}
          handleButtonClick={handleButtonClick}
        />
        <Search
          setAirState={setAirState}
          searchParam={searchParam}
          setSearchParam={setSearchParam}
          handleButtonClick={handleButtonClick}
        />
        <div ref={ref}>
          <Result air={airState} ref={ref} />
        </div>
      </section>
    </div>
  );
}
export default App;
