import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './style.scss';

export default () => {

  // search
  const handleSearch = (event) => {
    const reg = new RegExp(event.target.value, 'i');
    const list = document.getElementsByClassName("chat-list");

    let isvisible = false;
    for (let i = 0; i < list.length; i++) {
      isvisible = reg.test(list[i].textContent);
      if (isvisible) {
        list[i].classList.remove("hidden-row");
      } else {
        list[i].classList.add("hidden-row");
      }
    }
  };

  return (
    <div className="chat-wrap_display__contacts-search">
      <IconButton aria-label="menu">
        <MenuIcon style={{ fill:"#d0e0ee" }}/>
      </IconButton>
      <InputBase style={{ width: '100%' }}
        placeholder="Поиск"
        inputProps={{ 'aria-label': 'Поиск' }}
        onChange={ handleSearch }
      />
    </div>
  )
};
