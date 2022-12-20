import { useEffect, useState } from "react";
import Background from "./components/Background";
import Search from "./components/Search";
import Result from "./components/Result"
function App() {
  return (
    <div className="app">
      <section>
        <Background />
        <div id="weather">Hava Durumu</div>
        <Search />
        <Result />
      </section>
    </div>
  );
}
export default App;
