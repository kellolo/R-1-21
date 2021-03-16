import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '@pages/Home';

class Router extends Component {
  
  render() {
    const { activeChats } = this.props;
    const chatsRoutes = activeChats.map((el, i) => {
      return (
        <Route 
          exact 
          path={ `/chat/${ el.id }` } 
          render={ () => <Home chatId={ el.id } name={ el.name } /> }
          key={`router_${i}`}
        />
      );
    });
    return (
      <Switch>
        <Route exact path="/" component = { Home } />
        { chatsRoutes }
      </Switch>
    )
  }
};

const mapState = ({ chatsReducer }) => ({
  activeChats: chatsReducer.activeChats
});

const mapActions = dispatch => bindActionCreators({  }, dispatch);

export default connect(mapState, mapActions)(Router);