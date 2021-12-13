import './App.css';
import { ButtonContainer } from './Componets/Button';
import React, { useState, useEffect } from "react";

const url = "https://api.quotable.io/random";

function App() {

  const [quotes, setQuotes] = useState([]);

  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  const { content, author } = quotes; 

  return (
    <div>
      <div className="navbar navbar-dark">
        <h1 className="title">Random Quote Generator</h1>
      </div>

      <div className="center">
        <ButtonContainer onClick={getNewQuote}>
          Click Me!
        </ButtonContainer>
      </div>

      <h3 className="center">{author}</h3>
      <p className="center">{content}</p>
    </div>
  );
}

export default App;

