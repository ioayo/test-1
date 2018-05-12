import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../redux/actions/counter';

class App extends Component {
    render() {
        const { counter } = this.props;
        return (
            <div className="App">
                <button onClick={() => this.props.increment()}>+</button>
                {counter}
                <button onClick={() => this.props.decrement()}>-</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
