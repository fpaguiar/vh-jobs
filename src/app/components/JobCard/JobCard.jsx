import React from 'react';
import PropTypes from 'prop-types';

class JobCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card">
				<div className="card-content">
					<span className="card-title">{this.props.title}</span>
					<span>{this.props.location}</span>	
				</div>
				<div className="card-action">
					{this.props.skills.map((skill, i) => (<div key={i} className="chip">{skill}</div>))}
				</div>
			</div>
		);
	}
}

JobCard.propTypes = {
	title: PropTypes.string.isRequired,
	skills: PropTypes.array.isRequired,
	location: PropTypes.string.isRequired
};

export default JobCard;