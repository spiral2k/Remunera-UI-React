import React, { Component } from 'react';

export default class Settings extends Component {

	constructor(){
		super();
	}

	componentWillMount(){
		this.props.setPageTitle("Settings");
	}

	render(){
		return(
			<p className="test-inner-page-class">
				<img src="../images/settings-page.png" />
			</p>
			)
	}

}