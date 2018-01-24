import React from 'react';
import { Link } from 'react-router-dom';

import Logo from 'Components/Logo/Logo';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$(".side-menu").sideNav({
			edge: 'left',
			closeOnClick: true
		});
	}

	render() {
		return (
			<header>
				<nav className="orange accent-4">
					<div className="nav-wrapper">
						<div href="#" className="brand-logo" style={{margin: '0 1rem'}}>
							<Logo />
						</div>
						<a href="#" data-activates="mobile-demo" className="side-menu hide-on-large-only"><i className="material-icons">menu</i></a>
						<ul className="right hide-on-med-and-down">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/jobs">Jobs</Link></li>
						</ul>
						<ul id="mobile-demo" className="side-nav">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/jobs">Jobs</Link></li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default Navbar;