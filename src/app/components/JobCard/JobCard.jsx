import React from 'react';

class JobCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card grey darken-1">
				<div className="card-content white-text">
					<span className="card-title">Card Title</span>
					<div className="chip">React</div>
					<div className="chip">ES2016</div>
					<div className="chip">CSS3</div>
				</div>
				<div className="card-action">
					<a href="#">Link 1</a>
				</div>
			</div>
		);
	}
}

export default JobCard;