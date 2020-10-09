/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.


// ... codeing from here ...


/*
  THE DOCUMENTATION MAY CONFUSE YOU A BIT, SO HERE'S A HOWTO
  
  DON'T
  please, don't use this sample:
  https://samples.openweathermap.org/data/2.5/weather?q=Aarhus,DK&appid=YOURTOKENHERE

  DO
  Use the api as below:
  https://api.openweathermap.org/data/2.5/weather?q=Aarhus,DK&appid=YOURTOKENHERE
  
  PS:
  Probably your token will not activate right away. Have some patience here.
  */
const token = "201d090c9cceacfc8931df89310ebfbb"; // save your token in this variable

const aarhus = "https://api.openweathermap.org/data/2.5/weather?q=Aarhus,DK&appid=" +
    token +
    "&units=metric";

$(document).ready(function () {

    // get the weather data
    fetch(aarhus).then(response => {
        return response.json();
    }).then(data => {

        // Work with JSON data here
        console.log(data); // show what's in the json

        $('#result').append(
            '<div class="weatherInfo">' +
            data.weather[0].main +
            ' in ' +
            data.name +
            '<figure><img src="http://openweathermap.org/img/w/' +
            data.weather[0].icon +
            '.png" alt="The weather : ' +
            data.weather[0].main +
            '"></figure>' +
            '</div>');

        // here are the icons: https://openweathermap.org/weather-conditions 

    }).catch(err => {
        // Do something for an error here
        console.log('There was an error ...');
    });

}); // document ready end

mapboxgl.accessToken = 'pk.eyJ1IjoiamVubnltYWUiLCJhIjoiY2tmcWtlbGNtMGJ0NTJ3bzB2ODM2NWl3biJ9.OoNBfHTXEtINPw6pee5DVg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/jennymae/ckfxt6os90k6p19qipk7uwlyf', // style URL
    center: [10.551, 56.424], // starting position [lng, lat]
    zoom: 15 // starting zoom
});

