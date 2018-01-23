export function handleCheckBoxState(component, target) {
	component.setState({
		[target.name]: target.checked
	});
}

export function handleRadioChange({ target }) {
	this.setState({
		[target.name]: target.value
	});
}