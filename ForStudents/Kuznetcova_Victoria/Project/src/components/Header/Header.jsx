import React from "react";
import "./style.scss";

import Home from '@pages/Home';
import ChatList from '@containers/ChatsList';
import { Link } from 'react-router-dom';

export default (props) => {
  return <div className="header">
    <span className='header-profile'><Link to ={ 'profile' }>pro</Link></span>
         <span className='header-chat'> Chat with { props.name } </span>
  </div>;
};
