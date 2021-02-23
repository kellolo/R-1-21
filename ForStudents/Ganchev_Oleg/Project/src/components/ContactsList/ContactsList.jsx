import React, { Component } from 'react';
import './style.scss';
import Modal from "@components/Modal";

export default props => {
    const userName = [
        {name: 'Admin', avatar: null},
        {name: 'User1', avatar: null},
        {name: 'User2', avatar: null},
        {name: 'User3', avatar: null},
    ];

    return <div className="contacts-list">
        <Modal userName={ userName }/>
    </div>;
};