import React from "react";
import PushMg from "./PushMg";

function Background({background}) {
  return (
    <div className="background">
      <div className="overlay"></div>
      <PushMg mg = {background}/>
    </div>
  );
}

export default Background;
