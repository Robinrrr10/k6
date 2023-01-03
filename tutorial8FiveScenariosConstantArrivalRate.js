import http from 'k6/http'

export const options = {
    scenarios: {
        my_constant_arrival_rate_scenario: {
            executor: 'constant-arrival-rate', //constant RPS (iteration per sec)
            rate: 7, //This is number of RPS ( number of iteration per sec ). It is 7 RPS (7 iteration per sec)
            duration: '10s', //Total duration of performance test
            preAllocatedVUs: 5, //minimum users
            maxVUs: 10      //maximum users
        }
    }
}
export default function() {
	const response = http.get('https://reqres.in/api/users?page=2');
    console.log("status code: " + response.status)
}