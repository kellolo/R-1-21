import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import Link from '@material-ui/core/Link';
import { push } from 'connected-react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './style.scss';

const Header = (props) => {

    const { chats, chatID, user } = props;
    const curUser = user ? user : 'Guest';
    const chat = chats[chatID];
    const text = chat ? chat.title : `Profile - ${curUser}`;

    const handleNavigate = link => {
        props.push(link);
    };

    return <AppBar position="static" className='header'>
        <Toolbar className='header__wraper'>

            <Breadcrumbs aria-label="breadcrumb" className='header__breadcrumbs'>
                <Link href='/'
                    color='inherit'
                    onClick={() => handleNavigate(`/`)}>
                    Main
                </Link>
                <Link href='#' color='inherit' onClick={() => handleNavigate(`/profile`)}>
                    {curUser}
                </Link>
                <Link href='/' color='inherit'>
                    {text}
                </Link>
            </Breadcrumbs>

            <h1>{text}</h1>

            <Link href='#' color='inherit' className='header__profile'>
                <Avatar>{curUser[0]}</Avatar>
                &nbsp;
                {curUser}
            </Link>

        </Toolbar>

    </AppBar>;
}

const mapStateToProps = ({ chatsReducer }) => ({
    chats: chatsReducer.chats
});
const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);