//Load cats information from the cat-data.json file using AJAX request
function loadCatData() {
    //Make AJAX request
    $.ajax({
        url : './cat_data/data/cat_data.json' ,
        type: 'GET',
        success: function (response) {
            $('#table').empty();
            $('#table').append('<tr><th>Cat breed</th><th>Cat image</th></tr>')
            for(var i = 0;i<response['breeds'].length;i++){
                $('#table').append('<tr><td>'+response['breeds'][i]['breed-name']+'</td><td><div class="img-wrapper"><img src="cat_data/images/cats/'+response['breeds'][i]['pictures']['80x80']+'" width="100%" height="100%"></div></td></tr>')
            }
        },
        error: function (error) {
            alert('error')

        }

    })
}