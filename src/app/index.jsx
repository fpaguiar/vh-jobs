import React from 'react';
import {render} from 'react-dom';

const App = () => (
	<div>
		<p>It worked.</p>
	</div>
);

render(<App />, document.getElementById('app'));