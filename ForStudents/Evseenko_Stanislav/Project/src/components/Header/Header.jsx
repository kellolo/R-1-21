import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  noshadow: {
    boxShadow: 'none'
  }
}));

function ButtonAppBar(props) {
  const classes = useStyles(theme);
  const { heading, activeChats } = props;

  let header = null;
  if(heading) {
    activeChats.forEach(element => {
      if(element.id == heading) {
        header = element.name;
      };
    });
  };

  return (
    <div className="header">
      <AppBar
        position="static"
        className={ classes.noshadow }
      >
        <Toolbar>
          <Typography
            variant="h5"
            className={ classes.title }
          >
            { header != null ? header : 'Мессенджер' }
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = ({ chatsReducer }) => ({
  activeChats: chatsReducer.activeChats
});

export default connect(mapStateToProps, {})(ButtonAppBar);