import React, { Component } from 'react'
import Home from './../Home/Home';
import Header from './../elements/Header/Header';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFoundComponent from './../elements/NotFound/NotFoundComponent';
import Movie from './../Movie/Movie';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Header />
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/:movieId' component={Movie} exact />
                        <Route component={NotFoundComponent} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default App;
