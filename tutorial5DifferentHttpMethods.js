import http from 'k6/http';
import { sleep } from 'k6';

export default function() {

    console.log('GET request')
    let response = http.get('https://reqres.in/api/users/2');
    console.log(response.status)
    console.log(JSON.stringify(response.body))

    console.log('POST request')
    let payload = {
        "name": "ram", "job": "leader"
    }
    let params = {
        headers:{
                'Content-Type': 'application/json'
        }
    }
    let response2 = http.post('https://reqres.in/api/users', JSON.stringify(payload), params);
    console.log(response2.status)
    console.log(JSON.stringify(response2.body))

    console.log('PUT request')
    let payload2 = {
        "name": "Raja", "job": "manager"
    }
    let params2 = {
        headers:{
                'Content-Type': 'application/json'
        }
    }
    let response3 = http.put('https://reqres.in/api/users/2', JSON.stringify(payload2), params2);
    console.log(response3.status)
    console.log(JSON.stringify(response3.body))

    //in same way we can have for others methods like delete, patch, options and others

}