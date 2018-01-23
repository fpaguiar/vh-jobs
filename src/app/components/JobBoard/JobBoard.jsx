import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { fetchJobs } from './JobBoard.service';

import JobCard from 'Components/JobCard/JobCard';

class JobBoard extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		fetchJobs()
			.then(response => this.jobs = response);
	}

	render() {
		return (
			<div className="row">
				{this.jobs && this.jobs.map((job, i) => {
					return (
						<div key={i} className={`col s12 l${Math.trunc(12/this.props.cardsPerRow)}`}>
							<Link to="/jobs/12">
								<JobCard title={job.title} skills={job.skills} location={`${job.city}, ${job.country}`} />
							</Link>
						</div>
					);
				})}
			</div>
		);
	}
}

JobBoard.propTypes = {
	cardsPerRow: PropTypes.number.isRequired
};

export default JobBoard;