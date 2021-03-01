import React, { Component } from 'react';
import './style.scss';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';

export default function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="header">
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                <Avatar alt="Leia" src="../../src/resources/img/avatars/leia.jpg" />
                Princess Leia
            </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

// export default class Header extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         };
//     }

//     render() {
//         return <div className="header">

//         </div>;
//     }
// };