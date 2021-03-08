import React, { Component } from 'react';
import './style.scss';
import Modal from '@components/Modal';

export default class ContactsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { name: "Анастасия", photo: "bot" },
                { name: "Евгений", photo: "bot" },
                { name: "Марина", photo: "bot" },
                { name: "Петр", photo: "bot" }
            ],
            chats: [
                { name: "Бот", photo: "bot" },
                { name: "Катя", photo: "bot" },
                { name: "Вася", photo: "bot" },
                { name: "Машка", photo: "bot" }
            ]
        };
    }

    render() {
        return <div className="contactslist">
            <Modal contacts={this.state.contacts} />
        </div>;
    }
};
