import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import 'Assets/sass/main.scss';

//Components
import Navbar from 'Components/Navbar/Navbar';
import Footer from 'Components/Footer/Footer';

//Views
import JobsView from 'Views/Jobs/Jobs.view';
import DetailsView from 'Views/Details/Details.view';
import LandingPageView from 'Views/LandingPage/LandingPage.view';
import AboutView from 'Views/About/About.view';
// remove later
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(promise));

const App = () => (
	<div>
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<Navbar />
					<main>
						<Route exact path="/" component={LandingPageView} />
						<Route exact path="/about" component={AboutView} />
						<Route exact path="/jobs" component={JobsView} />
						<Route exact path="/jobs/:jobId" component={DetailsView} />
					</main>
					<Footer />
				</div>
			</BrowserRouter>
		</Provider>
	</div>
);

ReactDOM.render(<App />, document.getElementById('app'));