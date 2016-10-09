import React, { Component } from 'react';

const MenuItem = (props) => {

	return (

			<div className="item">

				<span className={`item-icon ${ props.class }`}></span>

				<span className="name">
					{props.title}
				</span>

			</div>
	)

}


export default MenuItem;