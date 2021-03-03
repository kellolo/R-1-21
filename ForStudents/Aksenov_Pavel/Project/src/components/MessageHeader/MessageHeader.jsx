import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

export default ({ username }) => {
  return (
    <div className="chat-wrap_header">
      <span>{ username }</span>
    </div>
  )
};
