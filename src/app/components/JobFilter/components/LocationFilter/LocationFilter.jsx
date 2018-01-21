import React from 'react';

import { handleCheckBoxChange } from 'Util/formUtils';

class LocationFilter extends React.Component {
	constructor(props) {
		super(props);

		this.handleCheckBoxChange = handleCheckBoxChange.bind(this);

		this.state = {
			cbLocationCa: false,
			cbLocationUs: false,
			cbLocationNl: false,
			cbLocationDe: false
		};
	}

	render() {
		return (
			<div>
				<p>
					<input type="checkbox" className="filled-in" id="cbLocationCa" checked={this.state.cbLocationCa} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbLocationCa">Canada</label>
				</p>
				<p>
					<input type="checkbox" className="filled-in" id="cbLocationUs" checked={this.state.cbLocationUs} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbLocationUs">Unites States</label>
				</p>
				<p>
					<input type="checkbox" className="filled-in" id="cbLocationNl" checked={this.state.cbLocationNl} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbLocationNl">Netherlands</label>
				</p>
				<p>
					<input type="checkbox" className="filled-in" id="cbLocationDe" checked={this.state.cbLocationDe} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbLocationDe">Germany</label>
				</p>
			</div>
		);
	}
}

export default LocationFilter;