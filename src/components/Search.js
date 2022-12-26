import React, { useEffect, useState } from "react";

function Search({
  setAirState,
  searchParam,
  setSearchParam,
  handleButtonClick,
}) {
  const api = {
    key: "3de4b704a089d3d18bb9e7d1d961fe15",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(
        // `${api.base}?q=${searchParam}&units=metric&lang=tr&appid=${api.key}`
        `${api.base}/forecast?q=${searchParam}&units=metric&lang=tr&appid=${api.key}`
      )
        .then((data) => data.json())
        .then((result) => {
          setSearchParam("");
          setAirState(result);
          handleButtonClick();
        });
    }
  };

  return (
    <div className="search">
      <input
        className="search-input"
        placeholder="Aramak istediğiniz şehri yazın"
        onChange={(e) => setSearchParam(e.target.value)}
        value={searchParam}
        onKeyPress={search}
        onClick={handleButtonClick}
      ></input>
    </div>
  );
}

export default Search;
