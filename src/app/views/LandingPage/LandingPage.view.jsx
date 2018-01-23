import React from 'react';
import { Link } from 'react-router-dom';

import JobBoard from 'Components/JobBoard/JobBoard';

import './LandingPage.scss';

import bgAmsterdam from 'Assets/images/background_amsterdam.jpeg';
import bgBerlin from 'Assets/images/background_berlin.jpg';
import bgVancouver from 'Assets/images/background_vancouver.jpg';
import Steps from './Steps/Steps';

class LandingPageView extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$('.parallax').parallax();
	}

	render() {
		return (
			<div>
				<div className="parallax-container overlay-content">
					<div style={{position: 'relative'}} className="white-text center-align">
						<h2 style={{textShadow: '3px 1px 2px #333'}}>Your next job is here.</h2>
					</div>
					<Link to="/jobs" className="waves-effect waves-light btn">Browse Jobs</Link>
					<div className="parallax">
						<img src={bgBerlin}/>
					</div>
				</div>
				<div className="section container">
					<h2 className="header">Latest Jobs</h2>
					<JobBoard cardsPerRow={4}/>
				</div>
				<div className="parallax-container">
					<div className="parallax"><img src={bgAmsterdam}/></div>
				</div>
				<div className="section container">
					<h2 className="header">How it Works</h2>
					<Steps />
				</div>
				<div className="parallax-container">
					<div className="parallax"><img src={bgVancouver}/></div>
				</div>
				<div className="section container">
					<h2 className="header">Start Browsing Now</h2>
					<p>Nunc sit amet porttitor sem. Praesent blandit lobortis ipsum, vel consectetur arcu sollicitudin id. Nunc in risus finibus, convallis nisl non, consequat mauris. Donec mattis tempus orci in fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus in fermentum odio. Ut mattis faucibus vestibulum. Fusce vestibulum laoreet convallis. Vivamus ligula augue, venenatis vulputate commodo rutrum, consequat id diam. Proin in massa porta, hendrerit justo eu, varius orci.</p>
					<div className="row center-align">
						<Link to="/jobs" className="waves-effect waves-light btn">Browse Jobs</Link>
					</div>	
				</div>
			</div>
		);
	}
}

export default LandingPageView;