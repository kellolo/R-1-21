import React from 'react';

export default props => {
    const { user, text } = props;

    if(user === 'User'){
        return  <div className="message_item my_message">
                <p className="message_text">{ text }</p>
            </div>;
    }
    return  <div className="message_item">
                <p className="message_name">{ user }</p>
                <p className="message_text">{ text }</p>
            </div>;
}