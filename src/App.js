import React, { useState, useEffect } from 'react';
import axios from 'axios'
import QuoteMachine from './QuoteMachine';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
  },
  withBorder: {
    border: '1px solid green',
  }
});

function App() {
  const classes = useStyles();

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

  function handleNewRandomQuoteIndex() {
    setQuoteIndex(Math.floor(Math.random() * quotes.length));
  }
  //Object.assign(classes.root, classes.withBorder)
  return (
    <Grid className={classes.root} id='quote-box' justify='center' container >
      <Grid xs={11} lg={8} item>
       { getQuote() ? <QuoteMachine className={classes.withBorder} quoteObj={getQuote()} onClickHandler={handleNewRandomQuoteIndex} />
        : null 
       }
      </Grid>
    </Grid>
  );
}

export default App;