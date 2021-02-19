import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

export default props => {
    const { userName, lastMessage } = props;

    return  <div>
                <p><b>{ userName }</b></p>
                {/* <p>{ lastMessage.text }</p> */}
            </div>;
}