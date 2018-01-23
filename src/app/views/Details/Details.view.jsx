import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from 'Actions/';

import Benefits from './components/Benefits/Benefits';
import Skills from './components/Skills/Skills';

class DetailsView extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchJobById(this.props.match.params.jobId);
	}

	render() {
		return (
			<div className="container">
				<div className="row valign-wrapper">
					<div className="col s8">
						<h2>{this.props.job.title}</h2>
					</div>
					<div className="col s4 right-align">
						<a className="waves-effect waves-light btn">Apply</a>
					</div>
				</div>
				<div className="row">
					<div className="col s6 blue-grey-text darken-4">
						<p className="valign-wrapper">
							<i className="material-icons">place</i>
							<span>{`${this.props.job.city}, ${this.props.job.country}`}</span>
						</p>
					</div>
					<div className="col s6 blue-grey-text darken-4">
						<p className="valign-wrapper">
							<i className="material-icons">business</i>
							<span>{this.props.job.company}</span>
						</p>
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col s12">
						<h4 className="teal-text lighten-1">Benefits</h4>
						<Benefits items={this.props.job.benefits || []} />
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col s12">
						<h4 className="teal-text lighten-1">Job Description</h4>
						<p>Nulla eget vulputate risus. Cras egestas nibh nec quam placerat efficitur. Suspendisse venenatis feugiat ligula. Maecenas at dui non dui efficitur congue eu non quam. Fusce tincidunt lacus ut lorem tempor posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla et felis nibh. Praesent at pharetra turpis. Quisque iaculis dolor ac interdum condimentum. Vestibulum at metus commodo, fermentum massa id, consequat nisi. Ut a interdum mauris, et scelerisque eros. Mauris placerat metus in lacinia ullamcorper. Maecenas iaculis ultricies mi, eget cursus lorem tincidunt in. Nam fringilla metus non mi commodo, vitae gravida tortor dignissim. Quisque et fermentum urna, scelerisque laoreet tortor. Aenean et quam ante.</p>
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<h4 className="teal-text lighten-1">Skills</h4>
						<Skills items={this.props.job.skills || []}/>
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<h4 className="teal-text lighten-1">About the Company</h4>
						<p>Sed id mauris ante. Nam aliquam urna dolor, vitae hendrerit mi commodo eu. Fusce gravida nisl euismod, sodales massa id, malesuada nibh. Suspendisse eget orci urna. Quisque a diam nec nibh dignissim congue. Proin euismod dolor at facilisis bibendum. Duis sodales magna a tellus pellentesque commodo. Praesent et mauris ex. Ut sit amet mollis magna, a varius sapien. Cras tempus ex elit, ac sodales mi semper a. Sed ex leo, iaculis non augue sit amet, luctus tristique est. In tempor consectetur erat in porta. Praesent diam velit, tincidunt et elit quis, placerat blandit lorem. Ut sollicitudin nulla pretium tellus vestibulum, sed faucibus eros cursus. Donec auctor dignissim massa, ac tempor urna consectetur non.</p>
						<p>Etiam cursus convallis commodo. Phasellus gravida risus ac imperdiet tempus. Aenean gravida justo ac fringilla malesuada. Pellentesque mollis commodo mi, quis laoreet nisl facilisis et. Nam accumsan congue eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel tincidunt felis, quis mollis eros. Suspendisse quis feugiat eros. Suspendisse vel turpis eu sapien facilisis placerat. Vestibulum efficitur venenatis condimentum. Nam condimentum nulla non nisl tristique commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis massa nec purus pulvinar malesuada dapibus a sapien. Suspendisse sollicitudin purus sed lectus blandit, a mollis ex suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
						<p>Quisque fringilla ac magna eu cursus. Fusce vitae pulvinar sem. In hac habitasse platea dictumst. Suspendisse vitae leo consectetur, auctor mauris non, sodales tellus. Mauris gravida, augue in varius imperdiet, nunc enim facilisis nisi, vitae ullamcorper elit augue quis libero. Integer blandit et eros a scelerisque. Vivamus sed est non est convallis viverra. Proin sit amet erat at libero euismod aliquam at sed odio. In hac habitasse platea dictumst. Etiam molestie eu diam in condimentum. In a odio eu ante rhoncus accumsan et sed elit.</p>
					</div>
				</div>
			</div>
		);
	}
}

DetailsView.propTypes = {
	match: PropTypes.object,
	fetchJobById: PropTypes.func,
	job: PropTypes.object
};

function mapStateToProps({jobs}) {
	const job = jobs[0] || {};

	return {job};
}

export default connect(mapStateToProps, actions)(DetailsView);