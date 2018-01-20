import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'Assets/sass/main.scss';

//Components
import Navbar from 'Components/Navbar/Navbar';
import JobsView from 'Views/Jobs.view';
import LandingPageView from 'Views/LandingPage.view';

const App = () => (
	<div>
		<Navbar />
		<BrowserRouter>
			<div>
				<Route exact path="/" component={LandingPageView} />
				<Route exact path="/jobs" component={JobsView} />
			</div>
			{/* <Route exact path="/jobs/:jobId" component={} /> */}
		</BrowserRouter>
		{/* <div className="container">
			<div className="row" />
			<div className="row">
				<div className="col s12 l3">
					<JobFilter />
				</div>
				<div className="col l9">
					<div className="row">
						<form action="">
							<div className="input-field col s6">
								<i className="material-icons prefix">search</i>
								<input id="icon_prefix" type="text" className="validate" />
								<label htmlFor="icon_prefix">Job Title, Keyword etc.</label>
							</div>
							<div className="input-field col s6">
								<i className="material-icons prefix">place</i>
								<input id="icon_telephone" type="tel" className="validate" />
								<label htmlFor="icon_telephone">Location</label>
							</div>
						</form>
					</div>
					<div className="row">
						<JobBoard />
					</div>
				</div>
			</div>
		</div> */}
	</div>
);

ReactDOM.render(<App />, document.getElementById('app'));