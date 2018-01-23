import React from 'react';
import PropTypes from 'prop-types';

const Benefits = props => (
	props.items.map((item, i) => (
		<div key={i} className="col s6 l4 valign-wrapper">
			<i className="material-icons">chevron_right</i>
			<p><strong>{item}</strong></p>
		</div>
	))
);

Benefits.propTypes = {
	items: PropTypes.array.isRequired
};

export default Benefits;