import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
	stages: [
		{duration: '20s', target: 4}, //This will start slowly scale to 4 user in 20 sec
		{duration: '10s', target: 1}, //Then slowly reduce to 1 user in next 10 sec
		{duration: '15s', target: 5}, //Then slowly increase to 5 user in next 15 sec
	],
	thresholds: {
		http_req_duration: ['p(99) < 1000']  //This is to validate whether response time of 99th percentile is less than 1 sec (1000 milli sec)
	}
}

export default function() {
	let response = http.get('https://reqres.in/api/users?page=2');
	console.log('Response status code: '+response.status);
	sleep(1)
}