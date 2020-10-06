/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar


    // ... codeing from here ...
    
 mapboxgl.accessToken = 'pk.eyJ1IjoiamVubnltYWUiLCJhIjoiY2tmcWtlbGNtMGJ0NTJ3bzB2ODM2NWl3biJ9.OoNBfHTXEtINPw6pee5DVg';
        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/jennymae/ckfqkpnd20abv19t8ylbtazhm', // style URL
            center: [10.218, 56.154], // starting position [lng, lat]
            zoom: 14 // starting zoom
        });