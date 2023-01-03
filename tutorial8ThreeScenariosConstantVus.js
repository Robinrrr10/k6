import http from 'k6/http'

export const options = {
    scenarios: {
        my_constant_users_scenario: {
            executor: 'constant-vus', //Here below 5 user will be constant everytime. But number of iteration can be as many as possible
            vus: 5,  //number of constant virual user
            duration: '5s',  //Total duration of performance run
            startTime: '1s'
        }
    }
}
export default function() {
	const response = http.get('https://reqres.in/api/users?page=2');
    console.log("status code: " + response.status)
}