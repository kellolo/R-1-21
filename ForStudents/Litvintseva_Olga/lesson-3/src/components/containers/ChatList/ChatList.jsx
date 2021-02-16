import React from 'react';

import Modal from '@components/Modal';

export default () => {
    return  <div className="chat_field">
               <ul className="chat_list">
                    <li className="chat_item">
                        <div className="chat_avatar">B</div>
                        <p className="chat_name">Bot</p>
                    </li>
               </ul>
               <Modal />              
            </div>;
}