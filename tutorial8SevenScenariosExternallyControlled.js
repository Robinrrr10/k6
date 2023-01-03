import http from 'k6/http'

export const options = {
    scenarios: {
        my_externally_controlled_scenarios: {
            executor: 'externally-controlled',  //This is to control the users externally using k6 command
            vus: 2, //default number of users
            maxVUs: 5,  //maximum users
            duration: '2m'   //duration of 2 mins
        }
    }
}
export default function() {
	const response = http.get('https://reqres.in/api/users?page=2');
    console.log("status code: " + response.status)
}

//we can test above by two terminal. one for running this file. and other for giving the k6 command to control
//using below command we can control when it was running
//k6 status              - this will give status of current scenario
//k6 scale --vus=15      - using scale command we can increase/decrease the users. here i have given 15 users. so it will increase from default 10 to 15
//k6 scale --vus=1       - this will scale down from 15 to 1 user
//k6 pause               - this is to pause the test
//k6 resume              - this is to resume the test