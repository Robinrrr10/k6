import http from 'k6/http';

export default function() {
    const response = http.get('https://reqres.in/api/users?page=2');
    console.log('status code: ' + response.status)
}