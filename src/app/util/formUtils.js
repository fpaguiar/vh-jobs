export function handleCheckBoxChange({ target }) {
	this.setState({
		[target.id]: target.checked
	});
}

export function handleRadioChange({ target }) {
	this.setState({
		[target.name]: target.value
	});
}