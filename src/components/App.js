import React, { Component } from 'react';
import store from '../redux/store';
import { Provider } from 'react-redux';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <button>+</button>
                    <button>-</button>
                </div>
            </Provider>
        );
    }
}

export default App;
