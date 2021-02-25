import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './style.scss';

import Contacts from '@components/Contacts';

export default class MessageList extends Component {
  render() {
    return <div className="chat-wrap_display__contacts">
    <Contacts />
  </div>
  }
}
