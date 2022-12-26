import React from "react";

function Result({ air, ref }) {
  return (
    <>
      {typeof air.main != "undefined" && (
        <div className="result" ref={ref}>
          <div className="result-item now">
            Bugün
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
          <div className="result-item now">
            Yarın
            <div className="city">{air.city.name}</div>
            <div className="date">
              {new Date(air.list[8].dt * 1000).toLocaleDateString()}

          <div className="result-item">
            <div className="city">
              {air.name},{air.sys.country}
            </div>
            <div className="detail">
              <div className="degree">{Math.round(air.main.temp)} °C </div>
              <div className="status">

                {air.list[8].weather[0].description.toUpperCase()}
              </div>
            </div>
          </div>
          <div className="result-item now">
            Yarın
            <div className="city">{air.city.name}</div>
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
            Yarın
            <div className="city">{air.city.name}</div>
            <div className="date">
              {new Date(air.list[24].dt * 1000).toLocaleDateString()}
            </div>
            <div className="detail">
              <div className="degree">
                {Math.round(air.list[24].main.temp)} °C{" "}
              </div>
              <div className="status">
                {air.list[24].weather[0].description.toUpperCase()}

                {air.weather[0].description.toUpperCase()}

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Result;
