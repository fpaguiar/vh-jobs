import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchJobs } from '../../actions';

import JobCard from 'Components/JobCard/JobCard';

class JobBoard extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchJobs(this.props.limit || 8);
	}	

	render() {
		return (
			<div className="row">
				{this.props.jobs && this.props.jobs.map((job, i) => {
					return (
						<div key={i} className={`col s12 l${Math.trunc(12/this.props.cardsPerRow)}`}>
							<Link to={`/jobs/${job.id}`}>
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
	cardsPerRow: PropTypes.number.isRequired,
	limit: PropTypes.number,
	jobs: PropTypes.array,
	fetchJobs: PropTypes.func
};

function mapStateToProps({ jobs }) {
	return { jobs };
}

export default connect(mapStateToProps, { fetchJobs })(JobBoard);