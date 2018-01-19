import React from 'react';
import ReactDOM from 'react-dom';

import 'Assets/sass/main.scss';

//Components
import Navbar from 'Components/Navbar/Navbar';
import JobBoard from 'Components/JobBoard/JobBoard';

const App = () => (
	<div>
		<Navbar />
		<div className="container">
			<div className="row">
				<div className="col l3"></div>
				<div className="col l9">
					<JobBoard />
				</div>
			</div>
		</div>
	</div>
);

ReactDOM.render(<App />, document.getElementById('app'));