import http from 'k6/http';
import papaparse from "https://jslib.k6.io/papaparse/5.1.1/index.js";
import { SharedArray } from 'k6/data';

export let options = {
	vus: 5,
	duration: '7s',	
	iterations: 5
}

var csvData = new SharedArray("datas", function(){
	return papaparse.parse(open('./tutorial4CsvData.csv'), {header: true}).data;
})

export default function() {
	let response = http.post('https://reqres.in/api/users', JSON.stringify({"name": csvData[Math.floor(Math.random() * csvData.length)]['name'], "job": csvData[Math.floor(Math.random() * csvData.length)]['job']}), {
		headers:{
			'Content-Type': 'application/json'
		}
	})

	console.log(response.status)
	console.log(JSON.stringify(response.body))
	console.log(response.json().name)
}