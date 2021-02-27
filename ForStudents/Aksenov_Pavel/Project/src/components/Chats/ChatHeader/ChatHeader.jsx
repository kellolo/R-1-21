import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default (props) => {
  return <div className="chat-wrap_display__contacts-search">
    <IconButton  aria-label="menu">
      <MenuIcon style={{fill:"#d0e0ee"}}/>
    </IconButton>
    <InputBase style={{width: '100%'}}
      placeholder="Поиск"
      inputProps={{ 'aria-label': 'Поиск' }}
    />
  </div>
}
