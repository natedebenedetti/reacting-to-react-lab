import React, { Component, Fragment } from 'react';

// const App = (props) => { // functional component... commented out to create it again as a class based component.
//     return <h1>{props.message}</h1>
// }

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Are you having a reaction to React?",
            message: "",
            hasLoaded: false
        };
    }

    handleInput(e) {
        this.setState({ message: e.target.value });
    }

    handleClick(e) {
        this.setState({ hasLoaded: true })
    }

    componentDidMount() {
        this.setState({ hasLoaded: true })
    }


    render() {
        if (this.state.hasLoaded) {
            return (
                <Fragment>
                    <h1 className="m-5">
                        <span className="text-info">{this.props.message}</span>
                        <span className="text-danger">{this.state.text}</span></h1>
                    <form className="form-group d-flex flex-wrap justify-content-center" >
                        <input
                            type="text"
                            className="form-control outline-danger m-2"
                            placeholder="type your React-ion here..."
                            value={this.state.message}
                            onChange={(e) => this.handleInput(e)} />
                        <button
                            className="form-control btn btn-lg btn-outline-danger"
                            onClick={(e) => this.handleClick(e)}>Load It!!!</button>
                    </form>
                    <h1>{this.state.message}</h1>
                </Fragment>
            );
        } else {
            return (
                <div>
                    <h1 className="text-primary">LOADING...</h1>
                    <button
                        className="form-control btn btn-lg btn-outline-danger"
                        onClick={(e) => this.handleClick(e)}>Load It!!!</button>
                </div>
            );
        }
    }
}

export default App;