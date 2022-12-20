import faker from 'https://cdn.jsdelivr.net/gh/Marak/faker.js@master/examples/browser/js/faker.js';

export default function() {
	
	console.log(faker.name.jobTitle());             //for every iteration the value of name will change
	console.log(faker.name.jobDescription());
	console.log(faker.name.jobArea());
	console.log(faker.name.jobType());
	
}


// CURRENTLY THIS IS NOT RUNNING AS THE URL IS NOT AVAILABLE NOW
// THIS IS JUST FOR REFERENCE