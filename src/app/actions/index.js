import axios from 'axios';
import { FETCH_JOBS, FETCH_JOB_ID, FETCH_JOB_COUNTRY, FETCH_JOB_CATEGORY } from './types';

const URL_JOBS = 'http://localhost:3000/jobs';

export const fetchJobs = limit => {
	const request = axios.get(`${URL_JOBS}?_limit=${limit}`);
	
	return { 
		type: FETCH_JOBS,
		payload: request
	};
};

export const fetchJobById = id => {
	const request = axios.get(`${URL_JOBS}/${id}`);

	return {
		type: FETCH_JOB_ID,
		payload: request
	};
};

export const fetchJobByCountry = countries => {
	const queryParams = countries.length > 0 ? `?country=${countries.join('&country=')}` : '';
	const request = axios.get(`${URL_JOBS}${queryParams}`);

	return { 
		type: FETCH_JOB_COUNTRY,
		payload: request 
	};
};

export const fetchFilteredJob = filters => {
	let countryParams = '';
	let categoryParams = '';
	const countries = Object.values(filters.countries);
	const categories = Object.values(filters.categories);

	countryParams = countries.length > 0 ? `country=${countries.join('&country=')}` : '';
	categoryParams = categories.length > 0 ? `category=${categories.join('&category=')}` : '';

	const request = axios.get(`${URL_JOBS}?${countryParams}&${categoryParams}`);

	return { 
		type: FETCH_JOB_CATEGORY,
		payload: request 
	};
};

