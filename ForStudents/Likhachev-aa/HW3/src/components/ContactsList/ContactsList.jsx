import React, { Component } from 'react';
import './style.scss';
import Modal from "@components/Modal";

export default props => {
    const userName = [
        { name: 'Andrew', avatar: null },
        { name: 'Bart', avatar: null },
        { name: 'Tom', avatar: null },
        { name: 'John', avatar: null },
    ];

    return <div className="contacts-list">
        <Modal userName={userName} />
    </div>;
};