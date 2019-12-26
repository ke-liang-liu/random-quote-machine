import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = ({ quoteObj, onClickHandler }) => {
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
      <CardActions>
        <Button id='new-quote' color='primary' onClick={onClickHandler} size='small'>Next</Button>
        <IconButton
          id='tweet-quote'
          target="_blank"
          href={encodeURI(`https://twitter.com/intent/tweet?text=${quoteObj.quote}&hashtags=RandomQuoteMachine`)}
        >
          <FontAwesomeIcon icon={faTwitter} size='md'></FontAwesomeIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default QuoteMachine;