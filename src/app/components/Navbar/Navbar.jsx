import React from 'react';

const Navbar = () => (
	<nav>
		<div className="nav-wrapper">
			<a href="#" className="brand-logo">VH-Jobs</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><a href="#">Jobs</a></li>
				<li><a href="#">About</a></li>
			</ul>
		</div>
	</nav>
);

export default Navbar;