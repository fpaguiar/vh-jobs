import React from 'react';
import ReactSVG from 'react-svg';

import facebook from 'Assets/images/svg/facebook.svg';
import twitter from 'Assets/images/svg/twitter.svg';
import linkedin from 'Assets/images/svg/linkedin.svg';

const SocialIcons = () => (
	<div className="row">
		<ReactSVG path={facebook} style={{width:'16px', height:'16px'}} wrapperClassName="inline"/>
		<ReactSVG path={twitter} style={{width:'22px', height:'22px'}}/>
		<ReactSVG path={linkedin} style={{width:'22px', height:'22px'}}/>
	</div>
);

export default SocialIcons;