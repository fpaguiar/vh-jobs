import React from 'react';

import JobCard from 'Components/JobCard/JobCard';

class JobBoard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="row">
				<div className="col l4"><JobCard /></div>
				<div className="col l4"><JobCard /></div>
				<div className="col l4"><JobCard /></div>
				<div className="col l4"><JobCard /></div>
				<div className="col l4"><JobCard /></div>
			</div>
		);
	}
}

export default JobBoard;