import http from 'k6/http'

export const options = {
    scenarios: {
        my_per_vu_scenario: {
            executor: 'per-vu-iterations',  //each user should call given iteration. Here 7 user will call 5 iteration. total ( 7x5 )= 36
            vus: 7,  //number of virual user
            iterations: 5,  //no of iteration per user
            startTime: '3s', //after how much time it should start. Here it will start after 3 sec
        }
    }
}
export default function() {
	const response = http.get('https://reqres.in/api/users?page=2');
    console.log("status code: " + response.status)
}