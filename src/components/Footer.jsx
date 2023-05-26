import React from "react";
import bunny from "./png/pngwing.com.png";

export default function Footer(props) {
  return (
    <>
      <footer className={`footer ${props.mode === false ? "light-theme" : "dark-theme"}`}>
        <div>
          <h4>
            developed by{" "}
            <a className={`${props.mode === false ? "dark-theme" : "light-theme-text"}`}
              target="_blank"
              href="https://www.linkedin.com/in/surya-prakash-52ba7b240/"
            >
              Surya Prakash
              <img className="bunny" src={bunny} alt="bunny" />
            </a>
          </h4>
        </div>
      </footer>
    </>
  );
}
