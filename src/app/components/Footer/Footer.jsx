import React from 'react';
import { Link } from 'react-router-dom';

import Logo from 'Components/Logo/Logo';

import SocialIcons from './components/SocialIcons/SocialIcons';

const Footer = () => (
	<footer className="page-footer blue-grey darken-4">
		<div className="container">
			<div className="row">
				<div className="col l6 s12">
					<h5 className="white-text"><Logo /></h5>
					<SocialIcons />
				</div>
				<div className="col l4 offset-l2 s12">
					<h5 className="white-text">Links</h5>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/jobs">Jobs</Link></li>
					</ul>
				</div>
			</div>
		</div>
		<div className="footer-copyright">
			<div className="container">
            © 2018 GetMeHired
			</div>
		</div>
	</footer>
);

export default Footer;