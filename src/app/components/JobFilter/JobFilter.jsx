import React from 'react';

import LocationFilter from './components/LocationFilter/LocationFilter';
import DateFilter from './components/DateFilter/DateFilter';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';

class JobFilter extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$('.button-collapse').sideNav({ edge: 'right' });
		$('.collapsible').collapsible();
	}

	render() {
		return (
			<div id="slide-out" className="side-nav">
				<ul className="collapsible" data-collapsible="expandable">
					<li>
						<div className="collapsible-header active"><i className="material-icons">place</i>Location</div>
						<div className="collapsible-body"><LocationFilter /></div>
					</li>
					<li>
						<div className="collapsible-header active"><i className="material-icons">work</i>Category</div>
						<div className="collapsible-body"><CategoryFilter /></div>
					</li>
				</ul>
			</div>
		);
	}
}

export default JobFilter;