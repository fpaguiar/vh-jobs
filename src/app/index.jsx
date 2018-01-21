import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'Assets/sass/main.scss';

//Components
import Navbar from 'Components/Navbar/Navbar';
import JobsView from 'Views/Jobs.view';
import LandingPageView from 'Views/LandingPage.view';
import AboutView from 'Views/About.view';

const App = () => (
	<div>
		<BrowserRouter>
			<div>
				<Navbar />
				<Route exact path="/" component={LandingPageView} />
				<Route exact path="/jobs" component={JobsView} />
				<Route exact path="/about" component={AboutView} />
			</div>
			{/* <Route exact path="/jobs/:jobId" component={} /> */}
		</BrowserRouter>
		
	</div>
);

ReactDOM.render(<App />, document.getElementById('app'));