import React, { useState } from "react";
import Loader from "./Loader";
import "./sass/style.css";

export default function Quote() {
  const [quotes, setQuotes] = useState({
    body: "The constitutions of most of our States assert that all power is inherent in the people that... it is their right and duty to be at all times armed.",
    author: "Thomas Jefferson",
  });

  const [loader, setLoader] = useState(false);

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

//   const copyQuote = () =>{
//         console.log(quotes.body);
//         const copyQuote = getQuotes.select();
//         copyQuote.setSelectionRange(0,99999);
//         navigator.clipboard.writeText(copyQuote.body);
//   }

  return (
    <>
      <main className="main">
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
    </>
  );
}
