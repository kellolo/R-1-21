import React, { Component } from 'react';
import './style.scss';
import ContactsList from '@containers/ContactsList';

export default class ChartList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return <div className="charts-list">
            <ContactsList />
        </div>;
    }
};
