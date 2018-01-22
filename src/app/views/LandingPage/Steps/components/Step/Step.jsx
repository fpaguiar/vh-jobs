import React from 'react';
import PropTypes from 'prop-types';

import './Step.scss';

const Step = props => (
	<div className={`step${props.timeline ? ' timeline': ''}`}>
		<div className="col step__left-side">
			<h5>{props.leftTitle}</h5>
			<p>{props.leftText}</p>
		</div>
		<div className="col step__center">
			<div className="step__circle center-align"><span>{props.stepNumber}</span></div>
		</div>
		<div className="col step__right-side">
			<h5>{props.rightTitle}</h5>
			<p>{props.rightText}</p>
		</div>
	</div>
);

Step.propTypes = {
	leftTitle: PropTypes.string,
	leftText: PropTypes.string,
	stepNumber: PropTypes.number.isRequired,
	rightTitle: PropTypes.string,
	rightText: PropTypes.string,
	timeline: PropTypes.bool
};

export default Step;