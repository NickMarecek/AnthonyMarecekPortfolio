import React, { Component } from "react";
import "./Logo.css";

class Logo extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<p className="glitch">
						<span aria-hidden="true">Josef Marecek</span>Josef Marecek
						<span aria-hidden="true">Josef Marecek</span>
					</p>
				</div>
			</React.Fragment>
		);
	}
}

export default Logo;
