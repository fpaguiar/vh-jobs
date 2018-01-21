import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = () => (
	<Link to="/">
		<div className="logo">GetMeHired</div>
	</Link>
);

export default Logo;