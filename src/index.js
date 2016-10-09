import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import Layout from '../components/layout';
import Home from '../components/home';
import Reports from '../components/reports';
import Settings from '../components/settings';

export default class App extends Component {

    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <Layout />
                {this.props.children}
            </div>
        )
    };


};

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/reports" component={Reports}/>
            <Route path="/settings" component={Settings}/>
        </Route>
    </Router>, document.getElementById('app')
);



//
// render(<App ggg={4} />, document.getElementById('app'));
//      <Route path="about" component={About}/>
//      <Route path="users" component={Users}>
 //       <Route path="/user/:userId" component={User}/>
//      </Route>
// render(<Simple />, document.getElementById('app'));