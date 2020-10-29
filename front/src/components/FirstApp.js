
import React, { Component } from 'react';

class FirstApp extends Component {
    state = {
        message: String
    }

    componentDidMount() {
        fetch('/Issues/message')
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({ message: data })
            })
            .catch(console.log)
    }


    render() {
        return (
            <div >
                <h3 > Première application</h3>
                {this.state.message.message}
            </div>
        );
    }
}

export default FirstApp;