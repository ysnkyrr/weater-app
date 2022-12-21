import React from "react";

function Result({ air, ref }) {
  return (
    <>
      {typeof air.main != "undefined" && (
        <div className="result" ref={ref}>
          <div className="result-item">
            <div className="city">
              {air.name},{air.sys.country}
            </div>
            <div className="detail">
              <div className="degree">{Math.round(air.main.temp)} °C </div>
              <div className="status">
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
