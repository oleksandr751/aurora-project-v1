import React from "react";
import loading from "../images/loading.gif";
const Loading = () => {
  return (
    <div style={{ display: "flex", alignSelf: "center" }}>
      <div className="loadingGif">
        <img alt="Loading...." src={loading}></img>
      </div>
    </div>
  );
};

export default Loading;
