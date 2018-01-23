import React from 'react';

import { handleRadioChange } from 'Util/formUtils';

class DateFilter extends React.Component {
	constructor(props) {
		super(props);

		this.handleRadioChange = handleRadioChange.bind(this);

		this.state = {
			publishDate: ''
		};
	}

	render() {
		return (
			<div className="container">
				<p>
					<input type="radio" className="with-gap" id="cbDate7d" name="publishDate" value={7} onChange={this.handleRadioChange}/>
					<label htmlFor="cbDate7d">7 Days Ago</label>
				</p>
				<p>
					<input type="radio" className="with-gap" id="cbDate15d" name="publishDate" value={15} onChange={this.handleRadioChange}/>
					<label htmlFor="cbDate15d">15 Days Ago</label>
				</p>
				<p>
					<input type="radio" className="with-gap" id="cbDate1m" name="publishDate" value={60} onChange={this.handleRadioChange}/>
					<label htmlFor="cbDate1m">1 Month Ago</label>
				</p>
			</div>
		);
	}
}

export default DateFilter;