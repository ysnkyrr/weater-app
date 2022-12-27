import React from "react";

function Result({ air, ref }) {
  // console.log("yasin", air.list[0].weather[0].description.toUpperCase());

  return (
    <>
      {typeof air.list != "undefined" && (
        <div className="result" ref={ref}>
          <div className="result-top now">
            <div className="city">{air.city.name}</div>
            <div className="date">
              {new Date(air.list[0].dt * 1000).toLocaleDateString()}
            </div>
            <div className="detail">
              <div className="degree">
                {Math.round(air.list[0].main.temp)} °C{" "}
              </div>
              <div className="status">
                {air.list[0].weather[0].description.toUpperCase()}
              </div>
            </div>
          </div>
          <div className="result-bottom">
            <div className="result-item now">
              <div className="date">
                {new Date(air.list[8].dt * 1000).toLocaleDateString()}
              </div>
              <div className="detail">
                <div className="degree">
                  {Math.round(air.list[8].main.temp)} °C{" "}
                </div>
                <div className="status">
                  {air.list[8].weather[0].description.toUpperCase()}
                </div>
              </div>
            </div>
            <div className="result-item now">
              <div className="date">
                {new Date(air.list[16].dt * 1000).toLocaleDateString()}
              </div>
              <div className="detail">
                <div className="degree">
                  {Math.round(air.list[16].main.temp)} °C{" "}
                </div>
                <div className="status">
                  {air.list[16].weather[0].description.toUpperCase()}
                </div>
              </div>
            </div>
            <div className="result-item now">
              <div className="date">
                {new Date(air.list[24].dt * 1000).toLocaleDateString()}
              </div>
              <div className="detail">
                <div className="degree">
                  {Math.round(air.list[24].main.temp)} °C{" "}
                </div>
                <div className="status">
                  {air.list[24].weather[0].description.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Result;
