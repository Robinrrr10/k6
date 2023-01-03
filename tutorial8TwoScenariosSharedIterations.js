import http from 'k6/http'

export const options = {
    scenarios: {
        my_shared_iteration_scenario: {
            executor: 'shared-iterations', //Here total iteration 10 will be shared with 5 users. each user will call 2 iteration 
            vus: 5,  //number of virual user
            iterations: 10,  //total number of iteration
        }
    }
}
export default function() {
	const response = http.get('https://reqres.in/api/users?page=2');
    console.log("status code: " + response.status)
}