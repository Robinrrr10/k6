import http from 'k6/http'

export const options = {
    scenarios: {
        my_constant_users_scenario: {
            executor: 'constant-vus',
            vus: 5,
            duration: '5s',
            startTime: '1s'
        },
        my_ramping_arrival_rate_scenario: {
            executor: 'ramping-arrival-rate', 
            startRate: 3,
            preAllocatedVUs: 2,
            maxVUs: 15,
            stages: [{
                target: 10,
                duration: '20s'
            },
            {
                target: 8,
                duration: '10s'
            }]
        }
    }
}
export default function() {
	const response = http.get('https://reqres.in/api/users?page=2');
    console.log("status code: " + response.status)
}

//Like above we can add multiple scenarios