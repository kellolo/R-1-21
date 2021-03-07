import React, { Component } from 'react';
import Modal from '@components/Modal';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { loadEmails } from '@actions/emailsContact';

import './style.scss';

class ContactList extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="contacts-list">
                <Modal 
                    emails={ this.props.emails } 
                    addChat={ this.props.add }
                />
            </div>
        );
    };
};

const mapState = ({ emailsReducer }) => ({ 
    emails: emailsReducer.emails,
});
const mapActions = dispatch => bindActionCreators({ loadEmails }, dispatch);

export default connect(mapState, mapActions)(ContactList);