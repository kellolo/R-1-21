const fs = require('fs');
const path = require('path');
const { Component } = require('react');

module.exports = componentName => {
    const content = ` 
        import React from 'react';
        import './style.scss';

        export default props => {
             return <div className="${componentName.toLowerCase()}">
        
                     </div>;
        };
    `;

    fs.writeFileSync(
        path.resolve(__dirname, '..', '..', 'src', 'components', componentName, `${componentName}.jsx`), 
        content
    );
}