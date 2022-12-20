import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
	stages: [
		{duration: '5s', target: 3}, 
	],
}

export default function() {
	let response = http.get('https://reqres.in/api/users?page=2');
	console.log('Response status code: '+response.status);

	check(response, {
		'status code is 200': (r) => r.status === 200,
		'response body has email': (r) => r.body.includes('@reqres.in')
	})

	sleep(1)
}