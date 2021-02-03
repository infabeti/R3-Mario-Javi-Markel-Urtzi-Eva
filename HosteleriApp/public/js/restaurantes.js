$(function() {
	// Para movimiento automático de las imágenes en el carrousel
	$('.carousel').carousel({

	  interval: false,
	});

	// Que no se mueva al iniciar
	$('.carousel').carousel('pause');

	$('.mapa').click(desplegar_mapa);
	$(".linkmenu").click(menuClickado);
	
	function desplegar_mapa() {
		var coordenadas = $(this).attr('coordenadas');

		var latylong = coordenadas.split(', ');

		var comas = coordenadas.split(',').length-1; // Para medir cuántas veces aparece la coma
		if (comas > 1){ // Si la coordenada viene con comas
			var cont = 0;
			latylong.forEach(function(x) {
				latylong[cont] = x.replace(',', '.');
				cont++;
			});
		}
		var lat = parseFloat(latylong[0]);
		var longi = parseFloat(latylong[1]);

		initMap(document.getElementById('map-box'),lat,longi);
		// Para ponerle el título
		var nombre_restaurante = $(this).closest('div.descripcion').find('h3').html();
		$('#map-box').dialog({
			title: 'Localización: '+nombre_restaurante,
			width: 500,
			height: 400
		});
	}
});

function menuClickado(){
	var idpulsado=$(this).attr("id");
	var menuJson={"primeros":[{"nombre":"Tremenda ensalada","precio":4.5},{"nombre":"Tremenda sopa","precio":7.0}],"segundos":[{"nombre":"Tremenda paella","precio":10.0}],"postres":[{"nombre":"Tremendo arroz con leche","precio":3.22},{"nombre":"Tremendo corneto","precio":1.5},{"nombre":"Tremenda manzana","precio":0.5}]};

	//var menuconvertido=JSON.parse(menuJson);
	//"http://localhost:8080/menu?menuid="+idpulsado


	$.ajax({
		type: 'GET',
  
		url: "http://localhost:8080/menu?menuid="+idpulsado,
  
		contentType: 'application/json',
  
		xhrFields: {
		  withCredentials: false
		},
  
		header: {
		  "Access-Control-Allow-Headers": "X-Requested-With",
		  "X-Requested-With": "XMLHttpRequest"        
		},
  
		success: function(data) {
		  console.log(data);
		},
  
		error: function() {
			console.log("Error en la peticion GET")
		}
	  });
	
	

	//imprimir datos en dialogo

	/*
	$("body").append("<div id='dialogomenu'></div>\n");
	alert(menuJson);
	$("#menudialogo").append(menuconvertido.);

	$("#menudialogo").dialog();
	*/

	
	

}


