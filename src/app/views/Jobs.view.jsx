import React from 'react';
import JobBoard from 'Components/JobBoard/JobBoard';
import JobFilter from 'Components/JobFilter/JobFilter';

const JobsView = () => (
	<div className="container">
		<div className="row" />
		<div className="row">
			<div className="col s12 l3">
				<JobFilter />
			</div>
			<div className="col l9">
				<div className="row">
					<form action="">
						<div className="input-field col s6">
							<i className="material-icons prefix">search</i>
							<input id="icon_prefix" type="text" className="validate" />
							<label htmlFor="icon_prefix">Job Title, Keyword etc.</label>
						</div>
						<div className="input-field col s6">
							<i className="material-icons prefix">place</i>
							<input id="icon_telephone" type="tel" className="validate" />
							<label htmlFor="icon_telephone">Location</label>
						</div>
					</form>
				</div>
				<div className="row">
					<JobBoard />
				</div>
			</div>
		</div>
	</div>
);

export default JobsView;