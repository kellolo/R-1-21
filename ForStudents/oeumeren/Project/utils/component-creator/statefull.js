const fs = require("fs");
const path = require("path");

module.exports = componentName => {
    const content = `
    import React, { Component } from "react";

    class ${componentName} extends Component {

        constructor(props) {
            super(props);
        }

        render() {
            return (
                <div></div>
            )
        }
    }

    export default ${componentName};
    `;

    fs.writeFileSync(
        path.resolve(__dirname, "..", "..", "src", "components", componentName, `${componentName}.jsx`),
        content.trim()
    );
}