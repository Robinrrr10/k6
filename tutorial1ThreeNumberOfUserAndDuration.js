import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
	vus: 3,     // number of user calling the request per sec    
	duration: '4s'  //total duration
	//This will run with 3 user calling the same api at a sec. Totally 12 request on 4 sec.
}

export default function() {
	let response = http.get('https://reqres.in/api/users?page=2');
	console.log('Response status code: '+response.status);
	sleep(1)
}