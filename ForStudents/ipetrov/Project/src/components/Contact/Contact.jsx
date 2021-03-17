
    import React from 'react';
    import './style.scss';
    import { makeStyles } from '@material-ui/core/styles';
    import List from '@material-ui/core/List';
    import ListItem from '@material-ui/core/ListItem';
    import ListItemIcon from '@material-ui/core/ListItemIcon';
    import ListItemText from '@material-ui/core/ListItemText';
    import SendIcon from '@material-ui/icons/Send';
    
    const useStyles = makeStyles((theme) => ({
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
    }));

  
    
    export default props =>  {
      const classes = useStyles();
      const { name, style } = props;
    
      return (
        <List
          component="nav"

          className={classes.root}
          style={style}
        >
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary={ name } />
          </ListItem>
        </List>
      );
    }
  



/*    export default props => {
        const { name } = props;

        return  <div className="contact">
                    <p>{ name }</p>
        </div>;
    };
*/