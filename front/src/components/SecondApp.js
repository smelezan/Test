
import React, { Component } from 'react';

class SecondApp extends Component {
    state = {
        message: String
    }

    componentDidMount() {
        fetch('Tasks/message')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ message: data })
            })
            .catch(console.log)
    }


    render() {
        return (
            <div >
                <h3 > Deuxième application</h3>
                {this.state.message.message}
            </div>
        );
    }
}

export default SecondApp;