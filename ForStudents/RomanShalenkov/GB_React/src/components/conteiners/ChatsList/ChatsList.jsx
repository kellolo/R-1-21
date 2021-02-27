
import React, { Component } from 'react';
import './style.scss';
import ContactsList from '@conteiners/ContactsList';
import { Link } from 'react-router-dom';

export default class ChatsList extends Component {
    constructor (props) {
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
