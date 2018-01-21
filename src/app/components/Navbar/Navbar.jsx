import React from 'react';
import { Link } from 'react-router-dom';

import Logo from 'Components/Logo/Logo';

const Navbar = () => (
	<nav className="teal orange accent-3">
		<div className="nav-wrapper">
			<div href="#" className="brand-logo">
				<Logo />
			</div>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><Link to="/jobs">Jobs</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
		</div>
	</nav>
);

export default Navbar;