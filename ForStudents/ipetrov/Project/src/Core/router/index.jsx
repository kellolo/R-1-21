import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { loadChat } from '@actions/chats';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Home from '@pages/Home';

class Router extends Component {
  render() {
        const { activeChats } = this.props;
        const ChatsRoutes = Object.keys(activeChats).map((el) => 
                                      <Route 
                                        exact path={`/chat/${el}`} 
                                        key={el}
                                        render = { () => <Home id={el} /> } 
                                      />);
    return (
      <Switch>
        <Route exact path="/" render = { () => <Home /> } />
        { ChatsRoutes }
            
        {/*<Route exact path="/" render = { () => <Home /> } />
        <Route exact path="/chat/0" render = { () => <Home id='0' /> } />
        <Route exact path="/chat/1" render = { () => <Home id='1' /> } />
        <Route exact path="/chat/2" render = { () => <Home id='2' /> } />
        <Route exact path="/chat/3" render = { () => <Home id='3' /> } />
        <Route exact path="/chat/4" render = { () => <Home id='4' /> } />
        <Route exact path="/chat/5" render = { () => <Home id='5' /> } />
        <Route exact path="/chat/6" render = { () => <Home id='6' /> } />
        <Route exact path="/chat/7" render = { () => <Home id='7' /> } />*/}
      </Switch>
    );
  }
};

const mapState = ({ chatsReducer }) => ({ 
  activeChats: chatsReducer.activeChats
});

const mapActions = dispatch => bindActionCreators({ load: loadChat  }, dispatch);

export default connect(mapState, mapActions)(Router);