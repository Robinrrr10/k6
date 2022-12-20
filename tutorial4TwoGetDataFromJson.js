import http from 'k6/http';
import { SharedArray } from 'k6/data';

export let options = {
	vus: 5,
	duration: '7s',	
	iterations: 5
}

var data = new SharedArray("name", function(){
	return JSON.parse(open('./tutorial4TwoJsonData.json')).nm;
})

var randomName = data[Math.floor(Math.random() * data.length)]

export default function() {
	let response = http.post('https://reqres.in/api/users', JSON.stringify({"name": randomName, "job": "leader"}), {
		headers:{
			'Content-Type': 'application/json'
		}
	})

	console.log(response.status)
	console.log(JSON.stringify(response.body))
	console.log(response.json().name)
}

