export function fetchJobs() {
	return fetch('http://localhost:3000/jobs').then(response => response.json());
}