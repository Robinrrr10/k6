import http from 'k6/http'

export const options = {
    scenarios: {
        my_ramping_arrival_rate_scenario: {
            executor: 'ramping-arrival-rate', //changing RPS (changing iteration per sec). Changes number of RPS as per each stages
            startRate: 3,  //Starting RPS
            //timeUnit: '1s', //comment this because to achive expected RPS
            preAllocatedVUs: 2,  //minimum users
            maxVUs: 15,    //maximum users
            stages: [{
                target: 10,  //slowly target for 10 RPS in given 20 sec
                duration: '20s'
            },
            {
                target: 8,  //Then slowly reduce to 8 in given 10 sec
                duration: '10s'
            }]
        }
    }
}
export default function() {
	const response = http.get('https://reqres.in/api/users?page=2');
    console.log("status code: " + response.status)
}