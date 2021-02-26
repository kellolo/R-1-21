import React from "react";

import styles from "./styles.module.scss"

const Message = (props) => {
    return (
        <div className={styles.message}>
            <i className={styles.message__author}>{ props.message.author }</i>
            <p className={styles.message__text}>{ props.message.text }</p>
        </div>
    )
}

export default Message;