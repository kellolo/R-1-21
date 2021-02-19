import React from 'react';
import './style.scss';


export default props => {
  const { name, text } = props;

  return <div className="header">
    <h2>чат</h2>
    <p>{text}</p>
  </div>;
}