import React from 'react';

import './LandingPage.scss';

import bgAmsterdam from 'Assets/images/background_amsterdam.jpeg';
import bgBerlin from 'Assets/images/background_berlin.jpg';
import bgVancouver from 'Assets/images/background_vancouver.jpg';

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
				<div className="parallax-container">
					<div className="parallax overlay-content">
						<img src={bgBerlin}/>
						<div style={{position: 'absolute'}} className="white-text">
							<h2>You new job is here.</h2>
						</div>
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
					<p>Praesent varius lectus ut metus porta feugiat. Aenean pulvinar elit eget massa suscipit, suscipit laoreet est lacinia. Sed commodo eu nibh vel ultricies. Praesent mattis sem ac eros scelerisque viverra. Morbi tempus maximus magna, eget lobortis lectus rutrum id. Suspendisse diam neque, eleifend et consectetur id, pretium sed tellus. Aliquam vitae sapien id diam iaculis cursus.</p>
					<p>Morbi ligula quam, faucibus sit amet mattis in, posuere sit amet arcu. Nam vestibulum mi erat, sed euismod elit tempor non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec tincidunt lectus sit amet dui auctor fermentum. Nam at ipsum at mauris dictum aliquet non at nulla. Aliquam ultricies mauris eu condimentum commodo. Pellentesque a ultricies lacus. Etiam fermentum pulvinar mi, condimentum consectetur lorem pellentesque id. Donec nisl tellus, placerat eget sem sed, porta ultricies libero. Ut dolor metus, interdum at rhoncus id, mattis eget urna. Ut laoreet nisi eu justo fringilla, vitae dictum ante finibus. Proin a tortor consectetur, blandit ligula commodo, pulvinar quam. Nam ultrices tempus aliquam. Donec eu venenatis ipsum, in sagittis arcu.</p>
				</div>
				<div className="parallax-container">
					<div className="parallax"><img src={bgVancouver}/></div>
				</div>
			</div>
		);
	}
}

export default LandingPageView;