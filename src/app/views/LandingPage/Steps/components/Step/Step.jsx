import React from 'react';
import PropTypes from 'prop-types';

import './Step.scss';

const Step = props => (
	<div className="step">
		<div className={`col step__left-side ${props.leftTitle ? 'card-panel' : ''}`}>
			<h5>{props.leftTitle}</h5>
			<p>{props.leftText}</p>
		</div>
		<div className="col step__center">
			<div className="step__circle center-align teal lighten-1 white-text"><span>{props.stepNumber}</span></div>
			<div className={`${props.timeline ? ' timeline': ''}`}></div>
		</div>
		<div className={`col step__right-side ${props.rightTitle ? 'card-panel' : ''}`}>
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