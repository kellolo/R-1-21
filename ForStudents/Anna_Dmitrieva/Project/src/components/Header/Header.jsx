import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

export default props => {
    const { chatId } = props;
    return <header className="header-home">
        <p>Annagram</p>
        <p>{ chatId }</p>
    </header>;
};