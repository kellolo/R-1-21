
import React, { Component } from 'react';
import './style.scss';
import Modal from '@components/Modal';

export default class Contactslist extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return <div className="contactslist">
            <Modal />
        </div>;
    }
};
