
import React, { Component, Fragment } from 'react';
import './style.scss';
import Modal from '@components/Modal';
import Contact from '@components/Contact';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ContactsList extends Component {
    constructor (props) {
        super(props);
        this.state = {
/*
            inactiveChats: [
                {name:'Вась Васич', id: '4'}, 
                {name:'Оль Олич', id: '5'}, 
                {name:'Дим Димыч', id: '6'}, 
                {name:'Халк Халкыч', id: '7'}
            ]
*/
        };
    }

    removeContact = val => {
        const inactiveProcessing = this.state.inactiveChats;
        const inactiveChats = inactiveProcessing.filter((user, i) => user.name !== val);
        this.setState({ inactiveChats: [
            ...inactiveChats
        ]});
    }


/* до перехода на объект
    render() {
        const { activeChats } = this.props;
        const Contacts = activeChats.map((el, i) => 
            <Link to = { `/chat/${el.id}` } key={ 'contact_' + i }>
                <Contact 
                    name={ el.name }
                />
            </Link>);

        return <div className="contactslist">
            <div>{ Contacts }</div>
            <Modal  removeContact={ this.removeContact }
                    add={ this.props.addContact } 
                    inactiveChats={ this.props.inactiveChats }
            />
        </div>;
    }
*/
    // перепишу на объекты
    render() {
        const { activeChats } = this.props;
        const Contacts = Object.keys(activeChats).map((el) => 
            <Link to = { `/chat/${el}` } key={ 'contact_' + el }>
                <Contact 
                    name={ activeChats[el].name }
                />
            </Link>);

        return <div className="contactslist">
            <div>{ Contacts }</div>
            <Modal  removeContact={ this.removeContact }
                    add={ this.props.addContact } 
                    inactiveChats={ this.props.inactiveChats }
            />
        </div>;
}



};


const mapState = ({ contactsReducer }) => ({
    inactiveChats: contactsReducer.inactiveChats
})

export default connect(mapState, null)(ContactsList);