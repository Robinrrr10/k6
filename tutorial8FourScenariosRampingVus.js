import http from 'k6/http'

export const options = {
    scenarios: {
        my_ramping_vus_scenario: {
            executor: 'ramping-vus',  //This will change the number of users as per target given in each stage. But iteration will be as many as possible
            startTime: '1s',
            stages: [{
                target: 3,   //initially slowly increase to 3 users in below 7 sec
                duration: '7s'
            },
            {
                target: 5,  //After above 7 sec, then slowly increase to 5 users in next 3 sec
                duration: '3s'
            },
            {
                target: 1,  //After above, then slowly decrease to 1 users in 6 sec
                duration: '6s'
            }]
        }
    }
}
export default function() {
	const response = http.get('https://reqres.in/api/users?page=2');
    console.log("status code: " + response.status)
}