import React, { Component, Fragment } from 'react';

// const App = (props) => {
//     return <div>What's App-ening {props.string}?</div>
// }

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { //initializing state
            text: "Are you having a reaction to react?", //used to pass into the h1 in return
            placeHolder: "Type your response here", // passed into the input field as placeholder

        };
        this.handleWhatsTyped = this.handleWhatsTyped.bind(this);
        this.handleWhatsSubmitted = this.handleWhatsSubmitted.bind(this);
    }
    handlewhenCliked() {
        this.setState({ placeHolder: "" });
    }

    handleWhatsTyped(value) {
        this.setState({ placeHolder: value });
    }


    render() {
        return (
            <Fragment>
                <h1>{this.props.string} {this.state.text}</h1>
                <input value={this.state.placeHolder}
                    onClick={(event) => { this.handlewhenCliked(event.target.value) }}
                    onChange={(event) => { this.handleWhatsTyped(event.target.value) }} />
            </Fragment>
        );

    }


}


export default App;