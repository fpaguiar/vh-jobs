import React from 'react';

import Step from './components/Step/Step';

const titles = [
	'In tempor euismod',
	'Cras sollicitudin nulla',
	'Convallis sit amet mi',
];
const texts = [
	'Maecenas ac justo ut enim pellentesque eleifend. Curabitur commodo efficitur magna, sodales efficitur ante lobortis at. Donec tempus fringilla augue quis consectetur.',
	'Integer nisi quam, laoreet at mauris quis, accumsan pulvinar leo. Pellentesque cursus, felis ac eleifend vehicula, ipsum velit tincidunt erat, at finibus tellus ante at purus. Proin dignissim ex orci, sit amet dictum metus hendrerit sed. ',
	'Cras eu neque ut lectus tristique cursus sed at lacus. Cras id libero facilisis, sagittis ipsum eu, rutrum tortor. Nunc nec ante dictum, vulputate enim sit amet, venenatis metus.',
];

const Steps = () => (
	<div className="row">
		<Step leftTitle={titles[0]} leftText={texts[0]} stepNumber={1} timeline/>
		<Step rightTitle={titles[1]} rightText={texts[1]} stepNumber={2} timeline/>
		<Step leftTitle={titles[2]} leftText={texts[2]} stepNumber={3} />
	</div>
);

export default Steps;