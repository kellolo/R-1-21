import React, { Component } from 'react';
import Modal from '@components/Modal';

import './style.scss';

export default class ContactList extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      contacts: [
        { name: 'Ваня', id: '4' },
        { name: 'Петя', id: '5' },
        { name: 'Саша', id: '6' },
      ]
    };
  };

  dellContact = (value) => {
    const newContacts = this.state.contacts;
    newContacts.forEach((element, i) => {
      if(element.name == value) {
        newContacts.splice(i, 1);
      };
    });
    this.setState({
      contacts: newContacts
    });
  };
    
  render () {
    const { add } = this.props;
    return (
      <div className="contact-list">
        <Modal
          contacts={ this.state.contacts }
          addChat={ add }
          dellContact={ this.dellContact }
        />
      </div>
    );
  };
};
  