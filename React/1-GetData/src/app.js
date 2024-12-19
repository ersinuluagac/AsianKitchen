import getData from './lib/service.js';

const userId = 1;

getData(userId)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error)
  });