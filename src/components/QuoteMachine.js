import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles(theme => ({
  actions: {
    display: 'flex',
  },
  expand: {
    marginLeft: 'auto',
  },
}));

const QuoteMachine = ({ quoteObj, onClickHandler }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        {quoteObj ? (
          <Typography>
            <span id='text'>{quoteObj.quote}</span>   -   <span id='author'>{quoteObj.author}</span>
          </Typography>
        ) : (
            null
          )
        }
      </CardContent>
      <CardActions className={classes.actions}>
        <IconButton
          className={classes.expand}
          id='tweet-quote'
          target="_blank"
          href={encodeURI(`https://twitter.com/intent/tweet?text=${quoteObj.quote}&hashtags=RandomQuoteMachine`)}
        >
          <FontAwesomeIcon icon={faTwitter} size='md'></FontAwesomeIcon>
        </IconButton>
        <Button variant="contained" id='new-quote' color='primary' onClick={onClickHandler} size='small'>Next</Button>
      </CardActions>
    </Card>
  );
}

export default QuoteMachine;