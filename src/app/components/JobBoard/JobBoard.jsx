import React from 'react';

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
			}
		];
	}

	render() {
		return (
			<div className="row">
				{this.jobs.map((job, i) => {
					return (
						<div key={i} className="col s12 l6">
							<JobCard title={job.title} skills={job.skills} location={`${job.city}, ${job.country}`} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default JobBoard;