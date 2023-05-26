import React, { useState } from "react";
import Loader from "./Loader";
import "./sass/style.css";
import Footer from "./Footer";
// import bunny from "./png/pngwing.com.png";

export default function Quote() {
  const [quotes, setQuotes] = useState({
    body: "The constitutions of most of our States assert that all power is inherent in the people that... it is their right and duty to be at all times armed.",
    author: "Thomas Jefferson",
  });

  const [loader, setLoader] = useState(false);
  const [mode, setMode] = useState(true);

  const getQuotes = async () => {
    setLoader(true);
    try {
      await fetch("https://favqs.com/api/qotd")
        .then((response) => response.json())
        .then((response) => {
          setQuotes(response.quote);
        });
      setLoader(false);
    } catch (error) {
      alert("try again later!");
    }
  };

  return (
    <>
      <main className={`main ${mode === false ? "dark-theme" : "light-theme"}`}>
        <div className="quote-card">
          {loader ? (
            <Loader />
          ) : (
            <div className="quote">
              <h4>{quotes.body}</h4>
              <p>
                {"- "}
                {quotes.author}
              </p>
            </div>
          )}
          <div className="quote-btn">
            <button onClick={getQuotes}>get quote</button>
            {/* <button onClick={copyQuote}>copy</button> */}
          </div>
        </div>
      </main>

      <Footer css={mode}/>
    </>
  );
}
