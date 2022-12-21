import http from 'k6/http'
import { check } from 'k6'

export default function() {
	let response = http.get('https://reqres.in/api/users?page=2');

	console.log(JSON.stringify(response.body))
	console.log(JSON.parse(response.body).page)
	check(response, {
		'validate response code is 200': (r) => r.status === 200,
		'validate response code not 400': (r) => r.status != 400,
		'validate one content in json body': (r) => JSON.parse(r.body).page == 2,
		'validate data length in json body': (r) => (JSON.parse(r.body)).data.length > 0,
		'validate email in one of the data': (r) => JSON.parse(r.body).data[1].email === 'lindsay.ferguson@reqres.in',
		'validate response body size': (r) => r.body.length <= 1030,
		'validate respone body contains email': (r) => r.body.includes('@reqres.in')
	})
}