import React, { Component } from 'react';

export default class Home extends Component {

	constructor(props){
		super();
	}

	componentWillMount(){
		this.props.setPageTitle("Home")
	}

	render(){
		return(
			<p className="test-inner-page-class">
				<img src="../images/home.png" />
			</p>)
	}

}

