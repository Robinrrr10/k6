import http from 'k6/http';
import { sleep } from 'k6';

export default function() {
	let response = http.get('https://reqres.in/api/users?page=2');
	console.log('Response status code: '+response.status);
	//console.log('Response body: '+response.body);
	console.log("----------------------****------------------")
	sleep(1);
}