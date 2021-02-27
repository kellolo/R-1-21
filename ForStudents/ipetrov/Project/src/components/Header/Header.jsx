
        import React from 'react';
        import { Link } from 'react-router-dom';
        import './style.scss';
        import { connect } from 'react-redux';

        const Header = props => {
            return  <div className="header">
                       Вас обслуживает <Link to = { `/profile/${props.id}` } className="headerlink">{ props.activeChats[props.id].name }</Link>
            </div>;
        };


        const mapState = ({ chatsReducer }) => ({ 
                activeChats: chatsReducer.activeChats
            })
        export default connect(mapState, null)(Header);