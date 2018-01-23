import React from 'react';
import PropTypes from 'prop-types';

const Skills = props => (
	props.items.map((item, i) => (<div key={i} className="chip">{item}</div>))
);

Skills.propTypes = {
	items: PropTypes.array.isRequired
};

export default Skills;