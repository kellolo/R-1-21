import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

export default (props) => {
  return <div className="chat-wrap_display__contacts-content">
    <div className="chat-wrap_display__contacts-search">
      <input type="text" placeholder="Поиск"/>
    </div>
    <div className="chat-wrap_display__contacts-list">
      Список чатов ...
    </div>
  </div>
}
