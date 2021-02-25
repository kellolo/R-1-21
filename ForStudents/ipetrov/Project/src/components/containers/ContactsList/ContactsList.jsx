
import React, { Component } from 'react';
import './style.scss';
import Modal from '@components/Modal';
import Contact from '@components/Contact'

export default class ContactsList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            contacts: ['Василий Петрович шиномонтаж', 'Эдуард Васильевич прачечная', 'Максим Евгеньевич парикмахерская']
        };
    }

    render() {

        const { contacts } = this.state;
        const Contacts = contacts.map((el, i) => 
            <Contact 
                key={ 'contact_' + i } 
                name={ el }
            />);

        return <div className="contactslist">
            <div>{ Contacts }</div>
            <Modal />
        </div>;
    }
};
    