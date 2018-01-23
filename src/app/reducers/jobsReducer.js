import { FETCH_JOBS, FETCH_JOB_COUNTRY, FETCH_JOB_CATEGORY, FETCH_JOB_ID } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_JOBS:
		return [ ...action.payload.data ];
	case FETCH_JOB_ID:
		return [ action.payload.data ];
	case FETCH_JOB_COUNTRY:
		return action.payload.data;            
	case FETCH_JOB_CATEGORY:
		return action.payload.data;            
	default:
		return state;
	}
}
