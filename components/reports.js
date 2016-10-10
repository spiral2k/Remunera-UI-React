import React, { Component } from 'react';

export default class Reports extends Component {

	constructor(){
		super();
	}

	componentWillMount(){
		this.props.setPageTitle("Reports")
	}


	render(){
		return(
			<p className="test-inner-page-class">
				<img src="../images/reports-page.png" />
			</p>
			)
	}

}