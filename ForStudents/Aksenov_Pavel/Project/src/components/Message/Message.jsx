import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from '@material-ui/core/Avatar';

import './style.scss';


export default (props) => {
  const { name, text, datetime } = props;
  const userAlias = name.substr(0, 1).toUpperCase();
  
  let colorText = '';
  let colorBckgr = '';

  if (name == 'User') {
    colorText = '#FFF';
    colorBckgr = '#b3bc1b';
  }
  else {
    colorBckgr = '#b052b6';
  };

  return (
    <div className="chat-wrap_display__message">
      <div className="chat-wrap_display__user">
        <Avatar style={{ backgroundColor: `${ colorBckgr }` }} title={ name }>{ userAlias }</Avatar>
      </div>
      <div className="chat-wrap_display__text" style={{ backgroundColor: `${ colorText }` }}>
        <p>{ text }</p>
        <time>{ datetime }</time>
      </div>
    </div>
  )
};
