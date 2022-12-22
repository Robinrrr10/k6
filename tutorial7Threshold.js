import http from 'k6/http';

export const options = {
    rps: 3,         //3 request per sec
    duration: '10s',     //totally 10 sec
    thresholds:{
        http_req_blocked: [{   //http_req_blocked is one of the metrics
            threshold: 'max < 100',     //maximum request blocked time should be less than 200 
            abortOnFail: true   //stop the test if above fails
        }],
        http_req_duration: [{   //http_req_duration is one of the metrics
            threshold: 'p(90) < 20',    //It will check whether 90th percentile of response time is less than given milli sec or not
            abortOnFail: true    //stop the test if above fails
        }]
    }
}

export default function() {
    const response = http.get('https://reqres.in/api/users?page=2');
    console.log(response.status);
    //console.log(JSON.stringify(response.body))
}