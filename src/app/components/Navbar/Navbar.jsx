import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<nav>
		<div className="nav-wrapper">
			<a href="#" className="brand-logo">
				<Link to="/">VH-Jobs</Link>
			</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><Link to="/jobs">Jobs</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
		</div>
	</nav>
);

export default Navbar;