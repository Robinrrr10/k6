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

    let responses = http.batch([
        ['GET', 'https://reqres.in/api/users/2'],
        ['POST', 'https://reqres.in/api/users', JSON.stringify(payload), params],
        ['GET', 'https://opensource-demo.orangehrmlive.com/web/dist/img/blob.svg'],
        ['GET', 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/css/app_modules.chunk.905c37.css'],
        ['GET', 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/js/vendor.chunk.155032e8.js'],
        ['GET', 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/186x116_AC_Fridge._SY116_CB620369430_.jpg']
    ])

    for(let i=0; i<responses.length;i++){
        console.log(responses[i].status)
    }
    
}