var express = require('express')
var app = express()
var fs = require('fs')

var jsonArr = [];

app.use(express.static(__dirname + '/public'));

app.get('/registros', (req, res) => {
	console.log('GET /registros')
	fs.readFile('movimientos.txt', 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  var arr = data.split("\n");
	  arr.forEach(function(entry) {
	  	 jsonArr.push({
	        moneda: entry.substring(41,44),
	        fecha: entry.substring(89, 97)
	    });
	  });
	  res.json(jsonArr)
	});
})
app.listen(3000, () => console.log('Servidor iniciado con Express en el puerto 3000'))


