import React, { Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../actions';

class LocationFilter extends Component {
	constructor(props) {
		super(props);

		this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
		this.handleCheckBoxState = this.handleCheckBoxState.bind(this);

		this.state = {
			cbLocationCa: false,
			cbLocationIe: false,
			cbLocationNl: false,
			cbLocationDe: false
		};

		this.countries = [];
	}

	handleCheckBoxChange({ target }) {
		this.handleCheckBoxState(target);

		this.countries.push(target.value);
		this.dispatchGetJobs(this.countries);
	}
	
	handleCheckBoxState(target) {
		this.setState({[target.id]: target.checked});
	}

	dispatchGetJobs(countries) {
		this.props.fetchJobByCountry(countries);
	}

	render() {
		return (
			<div className="container">
				<p>
					<input type="checkbox" className="filled-in" id="cbLocationCa" value="Canada" checked={this.state.cbLocationCa} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbLocationCa">Canada</label>
				</p>
				<p>
					<input type="checkbox" className="filled-in" id="cbLocationIe" value="Ireland" checked={this.state.cbLocationIe} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbLocationIe">Ireland</label>
				</p>
				<p>
					<input type="checkbox" className="filled-in" id="cbLocationNl" value="Netherlands" checked={this.state.cbLocationNl} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbLocationNl">Netherlands</label>
				</p>
				<p>
					<input type="checkbox" className="filled-in" id="cbLocationDe" value="Germany" checked={this.state.cbLocationDe} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbLocationDe">Germany</label>
				</p>
			</div>
		);
	}
}

export default connect(null, actions)(LocationFilter);