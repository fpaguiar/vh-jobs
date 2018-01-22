import React from 'react';
import { Link } from 'react-router-dom';

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
					<div style={{position: 'relative'}} className="white-text">
						<h2>Your next job is here.</h2>
					</div>
					<Link to="/jobs" className="waves-effect waves-light btn">Browse Jobs</Link>
					<div className="parallax">
						<img src={bgBerlin}/>
					</div>
				</div>
				<div className="section container white">
					<h2 className="header">Latest Jobs</h2>
					<p>Ut et eros eget turpis ornare sodales eget eget dui. Etiam posuere quam quis est euismod, ac luctus erat cursus. Proin mattis quam vel ante rutrum finibus. Nam vitae nibh nec lacus fermentum elementum. Donec ac dolor et turpis posuere accumsan. Nam pretium nunc at convallis pellentesque. Integer leo leo, eleifend ut viverra ut, efficitur non augue. Maecenas pellentesque ac leo vitae condimentum. Maecenas non erat lectus.</p>
					<p>Maecenas ac justo efficitur, consectetur est a, convallis tortor. Suspendisse ut malesuada odio, eget mattis erat. Nullam metus mauris, posuere quis mauris non, consectetur ornare nisl. Quisque aliquet, ipsum convallis commodo cursus, magna dui tempus felis, in interdum ligula nulla elementum sem. Proin feugiat, diam ac varius elementum, leo ligula aliquet ex, et hendrerit odio dolor consectetur turpis. Donec sit amet interdum nunc, non iaculis velit. Curabitur ultricies pulvinar nunc at pulvinar. Maecenas viverra vehicula arcu, eget porta justo tristique in. Fusce in tempus urna, sed interdum libero. Aenean pretium massa sit amet lacinia tempus.</p>
				</div>
				<div className="parallax-container">
					<div className="parallax"><img src={bgAmsterdam}/></div>
				</div>
				<div className="section container white">
					<h2 className="header">How it Works</h2>
					<Steps />
				</div>
				<div className="parallax-container">
					<div className="parallax"><img src={bgVancouver}/></div>
				</div>
				<div className="section container white">
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