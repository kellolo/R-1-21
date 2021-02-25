import React, { Component } from 'react';
import './style.scss';
import Modal from "@components/Modal";

export default class ContactsList extends Component {

    userName = [
        { id: '1003', name: 'User3', avatar: null },
        { id: '1004', name: 'User4', avatar: null },
        { id: '1005', name: 'User5', avatar: null },
    ];

    render() {
        return <div className="contacts-list">
            <Modal userName={ this.userName } addChat={ this.props.add }/>
        </div>;
    }
};