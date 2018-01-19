import React from 'react';
import {render} from 'react-dom';

import 'Assets/sass/main.scss';

import Navbar from 'Components/Navbar/Navbar.jsx';

const App = () => (
	<div>
		<Navbar />
		<p>It worked.</p>
	</div>
);

render(<App />, document.getElementById('app'));