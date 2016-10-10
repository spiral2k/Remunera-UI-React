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

        this.state = {
            nameOfThePage: null
        }

        this.getPageTitle = this.getPageTitle.bind(this);
        this.setPageTitle = this.setPageTitle.bind(this);

    }


    setPageTitle(nameOfPage){

        console.log("trying to set name of page: " , nameOfPage)

        this.setState({
            nameOfThePage: nameOfPage
        })


        console.log("name of the page: ", this.state.nameOfThePage)

    }



    getPageTitle(){
        return this.state.nameOfThePage;
    }

    render(){

        const viewWithProps = React.Children.map(this.props.children,
         (child) => React.cloneElement(child, {
           setPageTitle: this.setPageTitle
         })
        );
    
        return (
            <div>
                <Layout pageTitle={this.state.nameOfThePage} />
                {viewWithProps}
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