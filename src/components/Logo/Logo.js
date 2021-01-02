import React, { Component } from "react";
import "./Logo.css";

class Logo extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<p className="glitch">
						<span aria-hidden="true">Anthony Marecek</span>Anthony Marecek
						<span aria-hidden="true">Anthony Marecek</span>
					</p>
				</div>
			</React.Fragment>
		);
	}
}

export default Logo;
