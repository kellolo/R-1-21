import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


export default () => {  
  return (
    <div className="chat-wrap_input">
      <div className="chat-wrap_input__content">
        <TextField variant="outlined" />
        <button className="chat-wrap_input__button">Отправить</button>
      </div>
    </div>
  )
};
