import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from '@containers/Header';
import MessageList from '@containers/MessageList';
import DialogList from '@containers/DialogList';
import './style.scss';

export default function FixedContainer() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
            <Grid container justify="space-around">
                <Grid container item xs={12} justify="center" >
                    <Header />
                </Grid>
                <Grid item xs={3}>
                    <DialogList />
                </Grid>
                <Grid item xs={8}>
                    <MessageList />
                </Grid>
            </Grid>
        </Container>
      </React.Fragment>
    );
  }