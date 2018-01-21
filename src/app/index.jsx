import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'Assets/sass/main.scss';

//Components
import Navbar from 'Components/Navbar/Navbar';
import JobsView from 'Views/Jobs/Jobs.view';
import DetailsView from 'Views/Details/Details.view';
import LandingPageView from 'Views/LandingPage/LandingPage.view';
import AboutView from 'Views/About/About.view';

const App = () => (
	<div>
		<BrowserRouter>
			<div>
				<Navbar />
				<Route exact path="/" component={LandingPageView} />
				<Route exact path="/about" component={AboutView} />
				<Route exact path="/jobs" component={JobsView} />
				<Route exact path="/jobs/:jobId" component={DetailsView} />
			</div>
		</BrowserRouter>
		
	</div>
);

ReactDOM.render(<App />, document.getElementById('app'));