import React, { Component } from 'react';
import { Link } from 'react-router';

import MenuItem from '../components/menu-item';

import UserMenu from '../components/user-section';

class Layout extends Component {

	constructor(){
		super();

		this.state = {
	      dropdownIsActive: false,
	      dropdownIsVisible: false,
		}


		this.userMenuClick = this.userMenuClick.bind(this);

    	this.hideDropdown = this.hideDropdown.bind(this);
    	this.toggleDropdown = this.toggleDropdown.bind(this);
       	this.handleBlur = this.handleBlur.bind(this);
	}

	hideDropdown(e) {
			console.log("hideDropdown: ", e.target, this)
			// Hide dropdown block if it's not active
			if (this.state.dropdownIsActive) {
			  this.setState({ dropdownIsVisible: false });
		}
	}


	toggleDropdown(e) {
		console.log("toggleDropdown: ", e.target, this)
		// Toggle dropdown block visibility
		this.setState({ dropdownIsVisible: !this.state.dropdownIsVisible });
	}



	 handleBlur() {
		console.log("handleBlur: ", this)
		// Clean up everything on blur
		this.setState({
		dropdownIsVisible: false,
		dropdownIsActive: false,
		});
	 }


	componentDidMount() {
	    // Hide dropdown block on click outside the block
	    window.addEventListener('click', this.hideDropdown, false);
	}

	componentWillUnmount() {
		// Remove click event listener on component unmount
		window.removeEventListener('click', this.hideDropdown, false);
	}




	userMenuClick(){
		console.log("this: ", this);
		this.setState({
			userMenuVisible:true
		})
	}

	render(){

		return (
				<div>
	                <div className="header">
	                    <span className="page-title">Remunera</span>
	                    <div className="user-section">

	                    	<img src="images/user.png" className="user-image" />

	                    	<img 
						        onFocus={this.handleFocus}
						        onBlur={this.handleBlur}
						        onClick={this.toggleDropdown}
	                    	 src="images/dots.png" className="dots"/>

	                    	{ this.state.dropdownIsVisible ? <UserMenu /> : "" }
	                    </div>
	                </div>

	                <div className="menu">

	                    <Link to='/'>  
	                    	<img src="images/MealPlus.png" className="logo" />
	                    </Link>

	                    <span className="portal-name">
	                        Operator
	                    </span>
	                    <div className="side-menu">
	                        <span className="menu-item">

	                        <Link to={`/reports`}>
	                            <MenuItem title="Reports" icon="images/reports.png" class="reports-icon"/>
	                        </Link>  

	                        <Link to={`/settings`}>
	                            <MenuItem title="Setting" icon="images/settings.png" class="settings-icon"/>
	                        </Link> 

	                        </span>
	                    </div>
	                </div>

				</div>
		)

	}
}


export default Layout;