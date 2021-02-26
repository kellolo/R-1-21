import React from 'react';
// import ReactDom from 'react-dom';
import ChatList from '@containers/ChatList';
import MessageList from '@containers/MessageList';
// import MsgInput from '@components/MsgInput';
import { StylesProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CommentIcon from '@material-ui/icons/Comment';
import Button from "@material-ui/core/Button";
import './style.scss';

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    mainContainer: {
        display: "flex",
        flexDirection: "column"
    },
    main: {
        flexGrow: 1
    },
    itemSection: {
        display: "flex"
    },
    offset: theme.mixins.toolbar
}));
  
export default props => {
    const classes = useStyles();
    return (
        
        <StylesProvider>
            <CssBaseline />
            <Container  className={classes.mainContainer}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                         <CommentIcon />
                    </IconButton>
                    <Typography variant="h6"  className={classes.title}>
                        Chat with { props.name }
                    </Typography> 
                    <Typography variant="h6" >
                    ReactZilla
                        </Typography>
                       
                </Toolbar>
                
             </AppBar>
            
            <Grid container spacing={0} className={classes.main} alignItems="stretch">
            
                <Grid item xs={4} className={classes.itemSection} >
                    <ChatList />
                </Grid>
                <Grid item xs={8} className={classes.itemSection}>
                    <MessageList />
                </Grid>
  
            </Grid>    
            </Container>   
        </StylesProvider>    
        
    );

    // const classes = useStyles();
    //const [example, setExample] = useState("primary");
    // return 
    //     <AppBar     
        
    //   >
    //     <Toolbar>
    //       {/* <IconButton
    //         edge="start"
    //         className={classes.menuButton}
    //         color="inherit"
    //         aria-label="menu"
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" className={classes.title}>
    //         AppBar
    //       </Typography>
    //       <IconButton color="inherit" onClick={() => setExample("default")}>
    //         1
    //       </IconButton>
    //       <IconButton color="inherit" onClick={() => setExample("default")}>
    //         2
    //       </IconButton> */}
          
    //     </Toolbar>
    //   </AppBar>
    // ;
    // return <StylesProvider>
    //     <h1>Chat with { props.name }</h1>
    //             <div className="app__wrapper">
    //                 {/* <MsgInput /> */}
    //                 <ChatList />
    //                 <MessageList />
    //             </div>
    //         </StylesProvider>;
}
