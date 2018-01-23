import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from 'Actions/';

import LocationFilter from './components/LocationFilter/LocationFilter';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';

class JobFilter extends React.Component {
	constructor(props) {
		super(props);

		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.handleCountryChange = this.handleCountryChange.bind(this);

		this.filters = {
			countries: {},
			categories: {}
		};
	}

	updateFilter(filters, {checked, id, value}) {
		if (checked) {
			return Object.assign({}, filters, { [id]: value });
		}
		delete filters[id];
		return filters;
	}

	handleCategoryChange(target) {
		this.filters.categories = this.updateFilter(this.filters.categories, target);
		this.props.fetchFilteredJob(this.filters);
	}

	handleCountryChange(target) {
		this.filters.countries = this.updateFilter(this.filters.countries, target);
		this.props.fetchFilteredJob(this.filters);
	}

	componentDidMount() {
		$('.button-collapse').sideNav({ edge: 'right' });
		$('#sidenav-overlay').remove();
		$('.collapsible').collapsible();
	}

	render() {
		return (
			<div id="slide-out" className="side-nav">
				<ul className="collapsible" data-collapsible="expandable">
					<li>
						<div className="collapsible-header active"><i className="material-icons">place</i>Location</div>
						<div className="collapsible-body"><LocationFilter cbOnCheck={this.handleCountryChange}/></div>
					</li>
					<li>
						<div className="collapsible-header active"><i className="material-icons">work</i>Category</div>
						<div className="collapsible-body"><CategoryFilter cbOnCheck={this.handleCategoryChange}/></div>
					</li>
				</ul>
			</div>
		);
	}
}

JobFilter.propTypes = {
	fetchFilteredJob: PropTypes.func
};

export default connect(null, actions)(JobFilter);