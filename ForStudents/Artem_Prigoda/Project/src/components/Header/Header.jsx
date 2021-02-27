import React from 'react';
import './style.scss';


export default props => {
  const { name, text } = props;

  return <div className="header">
    <h2>чат с {name}</h2>
    <p></p>
  </div>;
}