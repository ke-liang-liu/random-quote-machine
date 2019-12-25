import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
      setQuotes(result.data.quotes);
      // setQuoteIndex(random(0, quotes.length - 1));
    }
    fetchData();
    /*
        Line 15/22  React Hook useEffect has a missing dependency: 'quotes.length'. Either include it or remove the dependency array. 
        You can also replace multiple useState variables with useReducer if 'setQuoteIndex' needs the current value of 'quotes.length' 
    */
  }, [])
  /**
   * set the first random index when page loads
   */
  useEffect(() => {
    if (quotes.length > 0) {
      setQuoteIndex(Math.floor(Math.random() * quotes.length));
    }
  }, [quotes])

  /**
   * get Quote object from states
   */
  function getQuote() {
    if (!quotes.length || !Number.isInteger(quoteIndex)) {
      return undefined;
    }
    return quotes[quoteIndex];
  }

  /**
   * generate a random integer as Index of quotes
   */
  function genRandomQuoteIndex() {
    return Math.floor(Math.random() * quotes.length);
  }



  return (
    <div className="App" id='quote-box'>
      {getQuote() ? `"${getQuote().quote}" - ${getQuote().author}` : <p>{quoteIndex}</p>}
    </div>
  );
}

export default App;
