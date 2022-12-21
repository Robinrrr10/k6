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

    let allRequests = {
        'first get request': req1,     //We can give name for each request
        'create post request': req2,
        'file call get': req3,
    }

    let responses = http.batch(allRequests)
    
    console.log(responses['first get request'].status)     //using the name we can retrieve the response
    console.log(responses['create post request'].status)
    console.log(responses['file call get'].status)
    
}