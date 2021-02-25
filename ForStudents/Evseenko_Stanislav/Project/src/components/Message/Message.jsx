import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

export default props => {
  const { name, text, time } = props;
  

  return (
    <div className="message message-list__message">
      <div className="message__header">
        <span className="message__username">{ name }</span>
        <span className="message__time">{ time }</span>
      </div>
      <p className="message__text">{ text }</p>
    </div>
  );
};