import React, { useState } from "react";
import Loader from "./Loader";
import "./sass/style.css";
import Footer from "./Footer";
import MdDarkMode from "react-icons/md";
import HiOutlineLightningBolt from "react-icons/hi";

export default function Quote() {
  const [quotes, setQuotes] = useState({
    quote:
      "The constitutions of most of our States assert that all power is inherent in the people that... it is their right and duty to be at all times armed.",
    author: "Thomas Jefferson",
  });

  const [loader, setLoader] = useState(false);
  const [mode, setMode] = useState(false);

  const getQuotes = async () => {
    setLoader(true);
    try {
      await fetch(
        "https://api.api-ninjas.com/v1/quotes?category=inspirational",
        { headers: { "X-Api-Key": "eOeXJBJwiTA5kWohq8I/Vg==UUZkTrNmXEB3hqI2" } }
      )
        .then((response) => response.json())
        .then((response) => {
          setQuotes(response[0]);
        });
      setLoader(false);
    } catch (error) {
      alert("try again later!");
    }
  };

  const switchTheme = () => {
    setMode(true);
    if (mode === true) {
      setMode(false);
    } else {
      setMode(true);
    }
  };

  return (
    <>
      <main className={`main ${mode === true ? "dark-theme" : "light-theme"}`}>
        <div className="theme-btn">
          <button
            onClick={switchTheme}
            className={`${mode === true ? "dark-text" : "light-text"}`}
          >
            {mode === true ? "light" : "dark"}
          </button>
        </div>
        <div
          className={`quote-card ${
            mode === true ? "quote-card-dark-theme" : "quote-card-light-theme"
          }`}
        >
          {loader ? (
            <Loader css={mode} />
          ) : (
            <div className="quote">
              <h5>
                {quotes.quote.length >= 250
                  ? quotes.quote.slice(0, 200) + "..."
                  : quotes.quote}
              </h5>
              <p>
                {"- "}
                {quotes.author}
              </p>
            </div>
          )}
          <div
            className={`${
              mode === true ? "quote-btn-dark-theme" : "quote-btn"
            }`}
          >
            <button onClick={getQuotes}>get quote</button>
          </div>
        </div>
      </main>

      <Footer css={mode} />
    </>
  );
}
