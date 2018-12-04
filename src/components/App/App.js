import React, { Component } from 'react'
import Home from './../Home/Home';
import Header from './../elements/Header/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        )
    }
}

export default App;
