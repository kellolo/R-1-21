
import React, { Component } from 'react';
import './style.css';

import ContactsList from '@containers/ContactsList';

export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return <div className="chatslist">

            <ContactsList />
        </div>;
    }
};