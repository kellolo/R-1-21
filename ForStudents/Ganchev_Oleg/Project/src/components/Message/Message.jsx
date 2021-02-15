import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

// props === {
//     name: 'some',
//     text: 'lorem'
// }

export default props => {
    const { name, text } = props;

    return  <div>
                <p><b>{ name }:</b> <span>{ text }</span></p>
            </div>;
}