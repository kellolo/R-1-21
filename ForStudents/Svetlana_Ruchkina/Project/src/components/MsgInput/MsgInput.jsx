import React from 'react';
// import ReactDom from 'react-dom';

import './style.scss';

export default () => {

    return <div>
        <input type="text" />
        <button>Send</button>
    </div>;
};

// не поняла, как реализовать передачу введенного пользователем текста из этого компонента в MessageList, пока инпут сделала там