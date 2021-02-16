import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import './style.scss';

export default props => {
  return (
    <div className="header">
        <Grid container justify="space-around" alignItems="center">
            <Grid container item xs={3} justify="center" >
                <Button
                    color="default"
                    startIcon={<Avatar />}
                >
                    Me
                </Button>
            </Grid>
            <Grid item xs={6}>
                Импортозаместительный чат!        
            </Grid>
          </Grid>
    </div>
  );
};
    