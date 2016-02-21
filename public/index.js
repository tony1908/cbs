$(document).ready(function() {
    var template = `<div class="row">
    <div class="col-md-1"></div>
        <div class="col-md-10">
            <article>
          <div class="panel panel-default">
          <div class="panel-heading">
          <h2 class="text-center">:name:</h2>
          </div>
          <div class="panel-body">
           <p>:summary:</p> 
            <p>:pais:</p>
            <p>:tarjeta:</p> 
            <p>:direccion:</p>
            <p>:fecha:</p>
          </div>
          </div>
          </div>
        <div class="col-md-1"></div>
        </article>
        <div>`

    $.ajax({
        type: 'GET',
        url: '/registros',
        dataType: "json",
        success: function(data) {
            data.forEach(function (datum) {
                var article = template
                  .replace(':name:', datum.descripcion)
                  .replace(':summary:', ( datum.moneda === "484" ) ? 'Pesos' : 'Dolares')
                  .replace(':pais:', datum.pais)
                  .replace(':tarjeta:', datum.tarjeta)
                  .replace(':direccion:', datum.calle)
                  .replace(':fecha:', datum.fecha.substring(6,8)+'/'+datum.fecha.substring(4,6)+'/'+datum.fecha.substring(0,4))
                $( ".loader" ).append(article)
                console.log(article)
            })
            }
    });

    $( "#dolares" ).click(function() {
      $.ajax({
        type: 'GET',
        url: '/registros',
        dataType: "json",
        success: function(data) {
            $( ".loader" ).empty()
            data.forEach(function (datum) {
                if (datum.moneda === '840') {
                    console.log('hola')
                    var article = template
                      .replace(':name:', datum.descripcion)
                      .replace(':summary:', ( datum.moneda === "484" ) ? 'Pesos' : 'Dolares')
                      .replace(':pais:', datum.pais)
                      .replace(':tarjeta:', datum.tarjeta)
                      .replace(':direccion:', datum.calle)
                      .replace(':fecha:', datum.fecha.substring(6,8)+'/'+datum.fecha.substring(4,6)+'/'+datum.fecha.substring(0,4))
                    $( ".loader" ).append(article)
                    // console.log(article)
                }
            })
            }
    })
    });

      $( "#pesos" ).click(function() {
      $.ajax({
        type: 'GET',
        url: '/registros',
        dataType: "json",
        success: function(data) {
            $( ".loader" ).empty()
            data.forEach(function (datum) {
                if (datum.moneda === '484') {
                    console.log('hola')
                    var article = template
                      .replace(':name:', datum.descripcion)
                      .replace(':summary:', ( datum.moneda === "484" ) ? 'Pesos' : 'Dolares')
                      .replace(':pais:', datum.pais)
                      .replace(':tarjeta:', datum.tarjeta)
                      .replace(':direccion:', datum.calle)
                      .replace(':fecha:', datum.fecha.substring(6,8)+'/'+datum.fecha.substring(4,6)+'/'+datum.fecha.substring(0,4))
                    $( ".loader" ).append(article)
                    // console.log(article)
                }
            })
            }
    })
    });

    $( "#extranjero" ).click(function() {
      $.ajax({
        type: 'GET',
        url: '/registros',
        dataType: "json",
        success: function(data) {
            $( ".loader" ).empty()
            data.forEach(function (datum) {
                if (datum.pais != 'MEX' && datum.moneda === '840') {
                    console.log('extranjero')
                    var article = template
                      .replace(':name:', datum.descripcion)
                      .replace(':summary:', ( datum.moneda === "484" ) ? 'Pesos' : 'Dolares')
                      .replace(':pais:', datum.pais)
                      .replace(':tarjeta:', datum.tarjeta)
                      .replace(':direccion:', datum.calle)
                      .replace(':fecha:', datum.fecha.substring(6,8)+'/'+datum.fecha.substring(4,6)+'/'+datum.fecha.substring(0,4))
                    $( ".loader" ).append(article)
                    // console.log(article)
                }
            })
            }
    })
    });

    $( "#nacional" ).click(function() {
      $.ajax({
        type: 'GET',
        url: '/registros',
        dataType: "json",
        success: function(data) {
            $( ".loader" ).empty()
            data.forEach(function (datum) {
                if (datum.pais == 'MEX') {
                    console.log('extranjero')
                    var article = template
                      .replace(':name:', datum.descripcion)
                      .replace(':summary:', ( datum.moneda === "484" ) ? 'Pesos' : 'Dolares')
                      .replace(':pais:', datum.pais)
                      .replace(':tarjeta:', datum.tarjeta)
                      .replace(':direccion:', datum.calle)
                      .replace(':fecha:', datum.fecha.substring(6,8)+'/'+datum.fecha.substring(4,6)+'/'+datum.fecha.substring(0,4))
                    $( ".loader" ).append(article)
                    // console.log(article)
                }
            })
            }
    })
    });

      $( "#tarjeta" ).click(function() {
        var tarjetas = []
        var tarNum = ''
      $.ajax({
        type: 'GET',
        url: '/registros',
        dataType: "json",
        success: function(data) {
            $( ".loader" ).empty()
            data.forEach(function (datum) {
                if (jQuery.inArray( datum.tarjeta, tarjetas ) == -1) {
                    tarjetas.push(datum.tarjeta)
                }
            })
            tarjetas.forEach(function (tarje) {
                $( ".loader" ).append('<div class="row"><div class="col-md-1"></div><div class="col-md-10"><div class="alert alert-dismissible alert-success"><h1 class="titulox text-center">'+tarNum+'</h1></div></div><div class="col-md-1"></div></div>')
                tarNum = tarje
                data.forEach(function (datum) {
                    if (tarje === datum.tarjeta) {
                        var article = template
                          .replace(':name:', datum.descripcion)
                          .replace(':summary:', ( datum.moneda === "484" ) ? 'Pesos' : 'Dolares')
                          .replace(':pais:', datum.pais)
                          .replace(':tarjeta:', datum.tarjeta)
                          .replace(':direccion:', datum.calle)
                          .replace(':fecha:', datum.fecha.substring(6,8)+'/'+datum.fecha.substring(4,6)+'/'+datum.fecha.substring(0,4))
                        $( ".loader" ).append(article)
                        }
                })
            })
            console.log(tarjetas)
            }
    })
    });


      $( "#comercio" ).click(function() {
        var rubros = []
      $.ajax({
        type: 'GET',
        url: '/registros',
        dataType: "json",
        success: function(data) {
            var tit = ''
            $( ".loader" ).empty()
            data.forEach(function (datum) {
                if (jQuery.inArray( datum.rubro, rubros ) == -1) {
                    rubros.push(datum.rubro)
                }
            })
            rubros.forEach(function (rub) {
                if (rub === '06011') {
                    tit = 'BANCOS  - DISPOSICIONES AUTOMATICAS DE EFECTIVO'
                } else if (rub == '05462') {
                    tit = 'PANADERIAS'
                } else if (rub == '05311') {
                    tit = 'TIENDAS DEPARTAMENTALES'
                } else if (rub == '00000') {
                    tit = 'COMISIONES'
                } else if (rub === '05422') {
                    tit = 'ABARROTES, MISCELANEAS, TIENDAS NATURISTAS, CARNICERIAS, PESCADERIAS, VERDULERIAS'
                } else if (rub === '05411') {
                    tit = 'AUTOSERVICIOS Y SUPERMERCADOS, ABARROTES EN G'
                } else if (rub === '05499') {
                    tit = 'TIENDAS DE CONVENIENCIA, MINISUPER'
                } else if (rub === '05814') {
                    tit = 'COMERCIO QUE VENDE COMIDA PREPARADA PARA CON'
                } else if (rub === '05541') {
                    tit = 'ESTACIONES DE SERVICIO, GASOLINERIAS, ESTACIONES'
                } else if (rub === '05655') {
                    tit = 'ROPA - EQUITACION, (ROPA - DEPORTIVA), (ROPA - PARA'
                } else if (rub === '05921') {
                    tit = 'DEPOSITOS DE CERVEZAS, (VINATERIAS), (DEPOSITOS '
                } else if (rub === '04121') {
                    tit = 'LIMOSINAS, (TAXIS)'
                } else if (rub === '05912') {
                    tit = 'DROGUERIAS, (FARMACIAS)'
                } else if (rub === '05451') {
                    tit = 'LECHERIAS, CREMERIAS, LACTEOS'
                } else if (rub === '05812') {
                    tit = ' RESTAURANTES, (CAFETERIAS)'
                } else if  (rub === '05969') {
                    tit = 'MERCADEO DIRECTO - NO CLASIFICADO'
                } else if (rub === '05969') {
                    tit = 'MERCADEO DIRECTO - NO CLASIFICADO'
                } else if (rub === '05971') {
                    tit = 'GALERIAS DE ARTE,(DISTRIBUIDORES DE ARTE)'
                } else if (rub === '05811') {
                    tit = 'ALIMENTOS - PROVEEDORES Y DISTRIBUIDORES'
                } else if (rub === '07011') {
                    tit = 'SERVICIOS NO CLASIFICADOS - HOTELES, MOTELES'
                } else if (rub === '05300') {
                    tit = 'CLUBES DE MAYORISTAS'
                } else if (rub === '07995') {
                    tit = 'CASINOS, CASAS DE JUEGO, (APUESTAS, INCLUYE BILL'
                } else if (rub === '07230') {
                    tit = 'SALONES DE BELLEZA, (PELUQUERIAS), (ESTETICAS)'
                } else if (rub === '07523') {
                    tit = ' ESTACIONAMIENTOS/PENSIONES'
                } else if (rub === '07832') {
                    tit = 'CINES, TEATROS'
                } else if (rub == '07997' ) {
                    tit = 'CLUBS DEPORTIVOS - MEMBRESIAS,(CURSOS PRIVADOS'
                }
                $( ".loader" ).append('<div class="row"><div class="col-md-1"></div><div class="col-md-10"><div class="alert alert-dismissible alert-success"><h1 class="titulox text-center">'+tit+'</h1></div></div><div class="col-md-1"></div></div>')
                tit = rub
                data.forEach(function (datum) {
                    if (rub === datum.rubro) {
                        var article = template
                          .replace(':name:', datum.descripcion)
                          .replace(':summary:', ( datum.moneda === "484" ) ? 'Pesos' : 'Dolares')
                          .replace(':pais:', datum.pais)
                          .replace(':tarjeta:', datum.tarjeta)
                          .replace(':direccion:', datum.calle)
                          .replace(':fecha:', datum.fecha.substring(6,8)+'/'+datum.fecha.substring(4,6)+'/'+datum.fecha.substring(0,4))
                        $( ".loader" ).append(article)
                        }
                })
            })
            console.log(rubros)
            }
    })
    });

      $( "#home" ).click(function() {
      $.ajax({
        type: 'GET',
        url: '/registros',
        dataType: "json",
        success: function(data) {
            $( ".loader" ).empty()
            data.forEach(function (datum) {
                    var article = template
                      .replace(':name:', datum.descripcion)
                      .replace(':summary:', ( datum.moneda === "484" ) ? 'Pesos' : 'Dolares')
                      .replace(':pais:', datum.pais)
                      .replace(':tarjeta:', datum.tarjeta)
                      .replace(':direccion:', datum.calle)
                      .replace(':fecha:', datum.fecha.substring(6,8)+'/'+datum.fecha.substring(4,6)+'/'+datum.fecha.substring(0,4))
                    $( ".loader" ).append(article)
                    // console.log(article)
                
            })
            }
    })
    });

}); 