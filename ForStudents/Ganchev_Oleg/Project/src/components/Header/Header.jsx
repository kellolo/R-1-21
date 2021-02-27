import React from 'react';
import './style.scss';

export default props => {
    const { chatId } = props;

    return <div className="header">
        <h1>MyMessenger (chat Id: { chatId || 0 })</h1>
    </div>;
};