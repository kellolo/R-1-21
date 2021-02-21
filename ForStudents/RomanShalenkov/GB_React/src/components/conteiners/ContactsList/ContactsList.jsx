import React from 'react';
import './style.scss';
import Modal from '@components/Modal';


export default class ContactsList extends Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }

    render() { 
        return <div className="chatslist">
                    <Modal />
        </div>;
    }
};

