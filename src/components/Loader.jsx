import React from "react";
import "./sass/style.css";

export default function Loader(props) {
  return (
    <>
      <div className="lds-ellipsis">
        <div className={`${props.css === true ? "dark" : "light"}`}></div>
        <div className={`${props.css === true ? "dark" : "light"}`}></div>
        <div className={`${props.css === true ? "dark" : "light"}`}></div>
        <div className={`${props.css === true ? "dark" : "light"}`}></div>
      </div>
    </>
  );
}
