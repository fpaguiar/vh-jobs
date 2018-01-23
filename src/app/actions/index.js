import axios from 'axios';
import { FETCH_JOBS, FETCH_JOB_ID } from './types';

const URL_JOBS = 'http://localhost:3000/jobs';

export const fetchJobs = limit => {
	const request = axios.get(`${URL_JOBS}?_limit=${limit}`);
	
	return { 
		type: FETCH_JOBS,
		payload: request
	};
};

export const fetchJobByCountry = countries => {
	const request = axios.get(`${URL_JOBS}?country=${countries.join('?country')}`);

	return { 
		type: FETCH_JOB_ID, 
		payload: request 
	};
};

