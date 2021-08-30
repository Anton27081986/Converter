import {getData} from './services/getData.js';

const timeP = document.querySelector('.time_p'),
      btnConvert = document.querySelector('.start-convert');

function getTime() {
    timeP.innerHTML = new Date();
}

// setInterval(getTime, 0);

btnConvert.addEventListener('click', () => {
    // https://free.currconv.com/api/v7/convert
    // ?q=USD_RUB&compact=ultra&apiKey=3e401f1fbbe2c0200284

    getData('https://free.currconv.com/api/v7/convert?q=USD_RUB&compact=ultra&apiKey=3e401f1fbbe2c0200284')
    .then(data => {
        console.log(data);
    });

});
