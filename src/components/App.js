import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../redux/actions/counter';

export class App extends Component {
    render() {
        const { counter } = this.props;
        return (
            <div>
                <div className="app">
                    <button onClick={() => this.props.increment()}>+</button>
                    {counter}
                    <button onClick={() => this.props.decrement()}>-</button>
                </div>
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
