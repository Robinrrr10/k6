import http from 'k6/http';
import {Trend, Counter, Rate, Gauge} from 'k6/metrics'; 

const customTrend = new Trend('custom_trend_metrics');
const customCounter = new Counter('number_of_response_with_more_than_120_milli_sec')
const customRate = new Rate('custom_rate_metrics_success_rate');
const customRate2 = new Rate('custom_rate_metrics_response_less_than_100_millisec');
const customGauge = new Gauge('last_response_time');

export const options = {
    scenarios: {
        my_constant_users_scenario: {
            executor: 'constant-vus',
			vus: 3,
			duration: '40s',
			startTime: '0s'
        }
    }
}
export default function() {
    const response = http.get('https://reqres.in/api/users?page=2');
    console.log('Status code: ' + response.status);
    customTrend.add(response.timings.duration);

    if(response.status == 200) {
        console.log("response status code is:" + response.status)
        customRate.add(1)
    }else{
        console.log('Error Status code: ' + response.status);
        customRate.add(0)
    }
    if(response.timings.duration < 100){
        console.log('response time is: ' + response.timings.duration);
        customRate2.add(1)
    }else{
        console.log('Error response time: ' + response.timings.duration);
        customRate2.add(0)
    }
    if(response.timings.duration > 120) {
        console.log('Response time with more than 120 milli sec: ' + response.timings.duration);
        customCounter.add(1)
    }
    customGauge.add(response.timings.duration)  
}