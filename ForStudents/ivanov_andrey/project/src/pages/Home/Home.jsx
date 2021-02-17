import React from 'react';
import MessageList from '@containers/MessageList';
import MsgInput from '@components/MsgInput';

import './style.scss';

export default () => {

    return  <div className="message_list">
                { <MessageList /> }
                {/* { <MsgInput /> } */}
            </div>;
}