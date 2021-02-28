import React, { Component } from 'react';
import Modal from '@components/Modal';

import './style.scss';

export default class ContactsList extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      contacts: [
        { name: 'Vanya' },
        { name: 'Petya' },
        { name: 'Sasha' }
      ]
    };
  };
    
  render () {

    return (
      <div className="contactslist">
        <Modal contacts = { this.state.contacts } />
      </div>
    );
  }
};
  