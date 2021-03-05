import React from "react";

import { deleteMsg } from "@actions/messageAction";

import styles from "./styles.module.scss"
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import {addChat} from "@actions/chatActions";
import {push} from "connected-react-router";

const useStyles = makeStyles((theme) => ({
    button: {
        width: "40px",
        height: "40px",
        minWidth: "40px",
        borderRadius: "50%",
        color: "#bdbdbd",
        marginRight: "5px"
    }
}));

const Message = (props) => {
    const { message, chatId, deleteMsg } = props;
    const classes = useStyles();
    const isAuthorMe = message.author !== "Robot";

    return (
        <div className={styles.message}>
            <i className={styles.message__author}>{ message.author }</i>
            <div className={`${styles.message__text} ${isAuthorMe ? styles.hasDeleteButton : ''}`}>
                {isAuthorMe && (
                    <IconButton className={classes.button}
                                onClick={() => deleteMsg(chatId, message.msgId)}>
                        <DeleteIcon/>
                    </IconButton>
                )}
                <p>{ message.text }</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({deleteMsg}, dispatch);

export default connect(() => ({}), mapDispatchToProps)(Message);