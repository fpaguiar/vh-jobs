import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<nav className="teal lighten-1">
		<div className="nav-wrapper">
			<div href="#" className="brand-logo">
				<Link to="/">VH-Jobs</Link>
			</div>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><Link to="/jobs">Jobs</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
		</div>
	</nav>
);

export default Navbar;