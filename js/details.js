"use strict";
$(function() {

    let breed = JSON.parse(localStorage["breed"]);
    $("#breed").text(breed.breed_name);
    $('#origin').text(breed.origin);
    $("img#image")
        .attr("src",`cat_data/images/cats/${breed.pictures.large}`)
        .attr("alt",breed.breed_name);
    $("p#text").text(breed.text);
    $('#link').attr('href', breed.link)
});