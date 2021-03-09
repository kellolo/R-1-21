import React, { Component } from 'react';
import './style.scss';
import Home from '@pages/Home'
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Router extends Component {

    render() {
        //console.log('router' + this.props.chats);
        return (
            <Switch className="router">
                <Route exact path='/' component={ Home } />
                <Route
                    exact
                    path='/Chat/:chatId'
                    render={ (obj) =>
                    <Home chatId={ Number(obj.match.params.chatId) } /> }
                />
            </Switch>
        );
    } 
};

const mapState = ({ chatsReducer }) => ({
    chats: chatsReducer.chats
});

const mapAction = dispatch => bindActionCreators({  }, dispatch);

export default connect(mapState, mapAction)(Router);