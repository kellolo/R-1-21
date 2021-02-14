import React from 'react';

import './style.scss';

// props === {
//     name: 'some',
//     text: 'lorem'
// }

export default props => {
    console.log(props);
    const { name, text } = props;

    return <div>
        <p><b>{ name }</b></p>
        <p><b>{ text }</b></p>
    </div>;
}