
import React, { Component, Fragment } from 'react';
import './style.scss';
import Modal from '@components/Modal';
import Contact from '@components/Contact';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeContact, addContact } from '@actions/contacts';
import CloseIcon from '@material-ui/icons/Close';

class ContactsList extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    };

    addContact = (chatId, name) => {
        this.props.add(chatId, name);
    };

    removeContact = val => {
        this.props.remove(val);
    };

    handleCloseClick = (chatId, name) => {
        this.addContact(chatId, name);
        this.props.removeChat(chatId);
    };

    render() {
        const { activeChats } = this.props;
        const Contacts = Object.keys(activeChats).map((el) => 
            (activeChats[el]) &&
            <div className="contactContainer" key={ 'contactlist_' + el } >
                <Link to = { `/chat/${el}` } key={ 'contact_' + el }>
                    <Contact 
                        name={ activeChats[el].name }
                        style={ activeChats[el].styleList }
                    />
                </Link>
                <button className="removeChat" onClick={() => this.handleCloseClick(el, activeChats[el].name)} ><CloseIcon className="removeChatIcon" /></button>
            </div>
            );

        return <div className="contactslist">
            <div>{ Contacts }</div>
            <Modal  removeContact={ this.removeContact }
                    add={ this.props.addChat } 
                    inactiveChats={ this.props.inactiveChats }
            />
        </div>;
    }
};

const mapState = ({ contactsReducer }) => ({
    inactiveChats: contactsReducer.inactiveChats
});

const mapActions = dispatch => bindActionCreators({ remove: removeContact, add: addContact }, dispatch);

export default connect(mapState, mapActions)(ContactsList);