import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TimeDisplay from './component/TimeDisplay';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TimeDisplay/>
            </div>
        );
    }
}

export default App;
