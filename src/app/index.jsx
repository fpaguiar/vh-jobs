import React from 'react';
import {render} from 'react-dom';

import 'Assets/sass/main.scss';

const App = () => (
	<div>
		<p>It worked.</p>
		<a className="waves-effect waves-light btn">button</a>
	</div>
);

render(<App />, document.getElementById('app'));