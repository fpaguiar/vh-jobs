import React from 'react';
import ReactSVG from 'react-svg';
import { Link } from 'react-router-dom';

import facebook from 'Assets/images/svg/facebook.svg';
import twitter from 'Assets/images/svg/twitter.svg';
import linkedin from 'Assets/images/svg/linkedin.svg';

import './SocialIcons.scss';

const SocialIcons = () => (
	<div className="row">
		<Link to="#">
			<ReactSVG path={facebook} style={{width:'22px', height:'22px'}} wrapperClassName="social-icon__facebook social-icon--inline"/>
		</Link>
		<Link to="#">
			<ReactSVG path={twitter} style={{width:'22px', height:'22px'}} wrapperClassName="social-icon__twitter social-icon--inline"/>
		</Link>
		<Link to="#">
			<ReactSVG path={linkedin} style={{width:'22px', height:'22px'}} wrapperClassName="social-icon__linkedin social-icon--inline"/>
		</Link>
	</div>
);

export default SocialIcons;