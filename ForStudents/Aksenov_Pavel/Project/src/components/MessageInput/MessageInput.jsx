import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './style.scss';


export default () => {

    return <div className="chat-wrap_input">
      <input type="text" size="60" />
      <button className="chat-wrap_input__button">Отправить</button>
    </div>
}
