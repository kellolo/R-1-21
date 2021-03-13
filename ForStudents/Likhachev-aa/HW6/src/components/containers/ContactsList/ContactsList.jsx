import React, { Component } from 'react';
import './style.scss';
import Modal from "@components/Modal";
import { connect } from "react-redux";

class ContactsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="contacts-list">
            <Modal users={ this.props.users } addChat={ this.props.add }/>
        </div>;
    }
}

const mapState = ({ usersReducer }) => ({
    users: usersReducer.users
});

export default connect(mapState, null)(ContactsList);