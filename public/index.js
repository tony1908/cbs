$(document).ready(function() {
    var template = `<article class="tv-show">
          <div class="right info">
            <h1>:name:</h1>
            <p>:summary:</p> 
          </div>
        </article>`

    $.ajax({
        type: 'GET',
        url: '/registros',
        dataType: "json",
        success: function(data) {
            data.forEach(function (datum) {
                if (datum.moneda === '484') {
                    var article = template
                      .replace(':name:', datum.descripcion)
                      .replace(':summary:', datum.moneda)
                    $( ".loader" ).append(article)
                    console.log(article)
                    }
            })
            }
    });
});