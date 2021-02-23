import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';


export default (props) => {
  const { name, text, datetime, color, icon } = props;
  
  return <div className="chat-wrap_display__message">
      <div className="chat-wrap_display__user"><img title={ name } src={ icon } width="42" height="42" alt="icon"/></div>
      <div className="chat-wrap_display__text" style={{backgroundColor: `${color}`}}>
        <p>{ text }</p>
        <time>{ datetime }</time>
      </div>
  </div>
}
