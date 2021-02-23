
    import React from 'react';
    import './style.scss';

    import Button from '@material-ui/core/Button';
    import { makeStyles } from '@material-ui/core/styles';
    import Icon from '@material-ui/core/Icon';
    import TextField from '@material-ui/core/TextField';
    
    const useStylesButton = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
    }));

    const useStylesInput = makeStyles((theme) => ({
        root: {
            '& > *': {
              margin: theme.spacing(1),
              width: '25ch',
            },
          },
        }));
      
    
 

    export const SendButton = () => {
        const classes = useStylesButton();

        return (
            // тут я не понял, почему иконка не пашет, вроде установил все
            <div>
                <Button
                variant="contained"
                color="primary"
                className={classes.button}
                >
                Отправить
                </Button>            
            </div>
            );
    };
    

 export const TextInput = () => {
        const classesInput = useStylesInput();
      
        return (
          <form className={classesInput.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </form>
        );
      }