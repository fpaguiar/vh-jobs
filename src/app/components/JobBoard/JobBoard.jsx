import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import JobCard from 'Components/JobCard/JobCard';

class JobBoard extends React.Component {
	constructor(props) {
		super(props);

		this.jobs = [
			{
				title: 'Backend Developer',
				skills: ['Java', 'REST', 'MySQL'],
				city: 'Berlin',
				country: 'Germany',
				publishDate: new Date(2017, 11, 13)
			},
			{
				title: 'DevOps Engineer',
				skills: ['Kafka', 'AWS', 'CI', 'CD'],
				city: 'Melbourne',
				country: 'Australia',
				publishDate: new Date(2017, 10, 23)
			},
			{
				title: 'UI/UX Developer',
				skills: ['Photoshop', 'Javascript', 'CSS3'],
				city: 'Vancouver',
				country: 'Canada',
				publishDate: new Date(2018, 1, 3)
			},
			{
				title: 'Frontend Developer',
				skills: ['ES2015', 'SASS', 'Angular'],
				city: 'Dublin',
				country: 'Ireland',
				publishDate: new Date(2018, 1, 20)
			}
		];
	}

	render() {
		return (
			<div className="row">
				{this.jobs.map((job, i) => {
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