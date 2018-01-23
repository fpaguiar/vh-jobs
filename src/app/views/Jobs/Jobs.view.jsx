import React from 'react';
import JobBoard from 'Components/JobBoard/JobBoard';
import JobFilter from 'Components/JobFilter/JobFilter';

import './Jobs.scss';

class JobsView extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$('.tooltipped').tooltip({delay: 50});
	}

	render() {
		return (
			<div className="container">
				<div className="row" />
				<div className="row">
					<div className="col s12">
						<div className="row valign-wrapper">
							<div className="col s10 l11">
								<div className="input-field">
									<form action="">
										<i className="material-icons prefix">search</i>
										<input id="icon_prefix" type="search" className="validate" />
										<label htmlFor="icon_prefix">Title, Skills etc.</label>
									</form>
								</div>
							</div>
							<div className="col s2 l1">
								<a className="btn-floating waves-effect waves-light tooltipped" data-position="right" data-tooltip="Filter">
									<i className="material-icons">filter_list</i>
								</a>
							</div>
						</div>
						<div className="row">
							<JobBoard cardsPerRow={2}/>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default JobsView;