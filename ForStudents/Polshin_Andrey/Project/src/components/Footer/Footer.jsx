import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import './style.scss';

export default () => {

    return <footer className='footer MuiAppBar-colorPrimary'>
        <Toolbar className='footer__wraper'>
            <h2 className="footer_copyright">@ by AndrewKolovrat</h2>
        </Toolbar>
    </footer>;
}