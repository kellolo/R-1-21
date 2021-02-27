import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './style.scss';

export default props => {
  const { name } = props

  return (
    <div className="contact">
      <Avatar />
      <Typography
        variant="body1"
        className="contact__name"
      >
        { name } 
      </Typography>
    </div>
  );
};