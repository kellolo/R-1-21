import React from 'react';
import './style.scss';

export default props => {
    return <div className="header">
        <h1>ChatBOT with {props.name}</h1>
    </div>;
};