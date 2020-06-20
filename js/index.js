"use strict";
$(function() {
    $.getJSON("cat_data/data/cat_data.json", displayCats);
});

function displayCats(data) {
    let $table = $("<table></table>");
    $table.appendTo("main");
    let breeds = data.breeds;
    console.log(breeds)
    breeds.forEach(function (breed, index) {
            $table.append(
                `<tr> 
                <td>
                <a href="details.html" data-index="${index}">${breed.breed_name}</a> 
                </td> 
                <td>
                <a href="details.html" data-index="${index}">
                     <img src="cat_data/images/cats/${breed.pictures.small}" 
                        alt="${breed.breed_name}" class="thumb">
                    </a> 
                </td>
            </tr>`
            );
        }
    );

    $("table a").click(function(){
        let index = $(this).data("index");
        localStorage["breed"] = JSON.stringify(breeds[index]);
    });
}