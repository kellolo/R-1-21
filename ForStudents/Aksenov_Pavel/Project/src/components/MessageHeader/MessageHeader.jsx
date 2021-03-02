import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';


export default ({userId}) => {
  return <div className="chat-wrap_header">
   Чат с именем <span>{ userId }</span>
  </div>
}
