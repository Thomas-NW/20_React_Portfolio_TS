import React from "react";
import "./style.css";
// import "../../../public/assets/vendor"

function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;
