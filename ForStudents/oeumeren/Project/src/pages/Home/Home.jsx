import React, { Component } from "react";

import MessageList from "@containers/MessageList/";

class Home extends Component {
    render() {
        return (
            <div>
                <MessageList />
            </div>
        )
    }
}

export default Home;