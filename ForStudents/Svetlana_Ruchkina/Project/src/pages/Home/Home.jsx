import React from 'react';
import MessageList from '@containers/MessageList';
import ChartsList from '@containers/ChartsList';
import Header from '@components/Header';

import './style.scss';

export default () => {

    return <div className="messenger">
        <Header />
        <div className="messenger-content">
            <ChartsList />
            <MessageList />
        </div>
    </div>;
}