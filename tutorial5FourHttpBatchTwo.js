import http from 'k6/http';
import { sleep } from 'k6';

export default function() {

    let payload = {
        "name": "ram", "job": "leader"
    }
    let params = {
        headers:{
                'Content-Type': 'application/json'
        }
    }

    let req1 = {
        method: 'GET',
        url: 'https://reqres.in/api/users/2'
    }

    let req2 = {
        method: 'POST',
        url: 'https://reqres.in/api/users',
        payload: JSON.stringify(payload),
        params: params
    }

    let req3 = {
        method: 'GET',
        url: 'https://opensource-demo.orangehrmlive.com/web/dist/img/blob.svg'
    }

    let responses = http.batch([req1, req2, req3])

    for(let i=0; i<responses.length;i++){
        console.log(responses[i].status)
    }
    
}