import React from 'react';
import PropTypes from 'prop-types';

class CategoryFilter extends React.Component {
	constructor(props) {
		super(props);

		this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);

		this.state = {
			cbCategorySe: false,
			cbCategoryQa: false,
			cbCategoryDo: false,
			cbCategoryDe: false
		};

		this.categories = {};
	}

	updateFilter(categories, {checked, id, value}) {
		if (checked) {
			return Object.assign({}, categories, { [id]: value });
		}
		delete categories[id];
		return categories;
	}

	handleCheckBoxChange({ target }) {
		this.handleCheckBoxState(target);

		this.props.cbOnCheck(target);
	}

	handleCheckBoxState(target) {
		this.setState({[target.id]: target.checked});
	}

	render() {
		return (
			<div className="container">
				<p>
					<input type="checkbox" className="filled-in" id="cbCategorySe" value="Software_Engineering" checked={this.state.cbCategorySe} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbCategorySe">Software Engineering</label>
				</p>
				<p>
					<input type="checkbox" className="filled-in" id="cbCategoryQa" value="QA_Engineering" checked={this.state.cbCategoryQa} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbCategoryQa">QA Engineering</label>
				</p>
				<p>
					<input type="checkbox" className="filled-in" id="cbCategoryDo" value="DevOps" checked={this.state.cbCategoryDo} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbCategoryDo">DevOps</label>
				</p>
				<p>
					<input type="checkbox" className="filled-in" id="cbCategoryDe" value="Data_Engineering" checked={this.state.cbCategoryDe} onChange={this.handleCheckBoxChange}/>
					<label htmlFor="cbCategoryDe">Data Engineering</label>
				</p>
			</div>
		);
	}
}

CategoryFilter.propTypes = {
	fetchJobByCategory: PropTypes.func,
	cbOnCheck: PropTypes.func
	
};

export default CategoryFilter;