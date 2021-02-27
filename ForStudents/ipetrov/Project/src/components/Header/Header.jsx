
        import React from 'react';
import { Link } from 'react-router-dom';
        import './style.scss';

        export default props => {
            return  <div className="header">
                       Вас обслуживает <Link to = { `/profile/${props.id}` } className="headerlink">{ props.name }</Link>
            </div>;
        };
    