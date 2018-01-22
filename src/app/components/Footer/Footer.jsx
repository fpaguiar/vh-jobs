import React from 'react';

import Logo from 'Components/Logo/Logo';

import SocialIcons from './components/SocialIcons/SocialIcons';

const Footer = () => (
	<footer className="page-footer blue-grey darken-1">
		<div className="container">
			<div className="row">
				<div className="col l6 s12">
					<h5 className="white-text"><Logo /></h5>
					<SocialIcons />
				</div>
				<div className="col l4 offset-l2 s12">
					<h5 className="white-text">Links</h5>
					<ul>
						<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
						<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
						<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
						<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
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