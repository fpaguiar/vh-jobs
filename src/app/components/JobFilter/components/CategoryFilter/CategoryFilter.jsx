import React from 'react';

import { handleCheckBoxChange } from 'Util/formUtils';

class CategoryFilter extends React.Component {
	constructor(props) {
		super(props);

		this.handleCheckBoxChange = handleCheckBoxChange.bind(this);

		this.state = {
			cbCategorySe: false,
			cbCategoryQa: false,
			cbCategoryPm: false,
			cbCategoryDe: false
		};
	}

	render() {
		return (
			<div>
				<p>
					<input type="checkbox" className="filled-in" id="cbCategorySe" checked={this.state.cbCategorySe} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbCategorySe">Software Engineering</label>
				</p>
				<p>
					<input type="checkbox" className="filled-in" id="cbCategoryQa" checked={this.state.cbCategoryQa} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbCategoryQa">QA Developer</label>
				</p>
				<p>
					<input type="checkbox" className="filled-in" id="cbCategoryPm" checked={this.state.cbCategoryPm} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbCategoryPm">Project Management</label>
				</p>
				<p>
					<input type="checkbox" className="filled-in" id="cbCategoryDe" checked={this.state.cbCategoryDe} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbCategoryDe">Data Engineering</label>
				</p>
			</div>
		);
	}
}

export default CategoryFilter;