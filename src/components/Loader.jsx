import React from "react";
import "./sass/style.css";

export default function Loader() {
  return (
    <>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
