import React from 'react';

import LocationFilter from './components/LocationFilter/LocationFilter';
import DateFilter from './components/DateFilter/DateFilter';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';

class JobFilter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className="collapsible" data-collapsible="expandable">
				<li>
					<div className="collapsible-header"><i className="material-icons">place</i>Location</div>
					<div className="collapsible-body"><LocationFilter /></div>
				</li>
				<li>
					<div className="collapsible-header"><i className="material-icons">date_range</i>Publish Date</div>
					<div className="collapsible-body"><DateFilter /></div>
				</li>
				<li>
					<div className="collapsible-header"><i className="material-icons">work</i>Category</div>
					<div className="collapsible-body"><CategoryFilter /></div>
				</li>
			</ul>
		);
	}
}

export default JobFilter;