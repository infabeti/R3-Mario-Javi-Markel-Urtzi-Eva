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

		var nombre_restaurante = $(this).closest('div.descripcion').find('h3').html();





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
			  //console.log(data);

			  var jsonData = jQuery.parseJSON(data);

			  var primeros="";

			  for(var i=0;i<jsonData.primeros.length;i++){
				  primeros=primeros+jsonData.primeros[i].nombre.padEnd(70, '.')+jsonData.primeros[i].precio+"€\n<br>";
			  }
			  var segundos="";

			  for(var i=0;i<jsonData.segundos.length;i++){
				  segundos=segundos+jsonData.segundos[i].nombre.padEnd(70, '.')+jsonData.segundos[i].precio+"€<br>";
			  }
			  var postres="";

			  for(var i=0;i<jsonData.postres.length;i++){
				  postres=postres+jsonData.postres[i].nombre.padEnd(70, '.')+jsonData.postres[i].precio+"€\n<br>";
			  }

			  $("body").append("<div id='dialogomenu'></div>\n");


			  $("#dialogomenu").append("<h3>Primeros</h3>");
			  $("#dialogomenu").append("<p>"+primeros+"</p>");


			  $("#dialogomenu").append("<h3>Segundos</h3>");
			  $("#dialogomenu").append("<p>"+segundos+"</p>");


			  $("#dialogomenu").append("<h3>Postres</h3>");
			  $("#dialogomenu").append("<p>"+postres+"</p>");
		  
			//console.log(nombre_restaurante)
			  $("#dialogomenu").dialog({
				title: "Menú "+nombre_restaurante,
				close:function(){
					$("#dialogomenu").remove();
				  },
				  width: "auto",
				  // maxWidth: 660, // This won't work
				  create: function( event, ui ) {
				    // Set maxWidth
				    $(this).css({
					    "maxWidth" : "100%",
				    });
					  }
				  });
			  
			  
			
			
		},
  
		error: function() {
			console.log("Error en la peticion GET");
			alert("Error en la peticion GET");
		}
	  });
	
	

	

	/*

	*/

	/*
{"primeros":[{"nombre":"Macarrones con chorizo","precio":7.49},{"nombre":"Revuelto de setas","precio":8.49},{"nombre":"Arroz Meloso con Rabo de Ternera al Toque de Curry","precio":10.49},{"nombre":"Romanescu con vinagreta de comino y naranja","precio":8.99},{"nombre":"Crema de calabaza","precio":6.49}],"segundos":[{"nombre":"Tallarines con pollo al pesto de avellanas y rúcula","precio":9.49},{"nombre":"Arroz con Conejo al Horno","precio":12.99},{"nombre":"Fingers de pollo al crujiente de cacahuete","precio":9.99},{"nombre":"Pollo de Navidad","precio":13.99},{"nombre":"Sardinas asadas en papillote","precio":9.49},{"nombre":"Huevos en cocotte al gorgonzola con rúcula","precio":11.49}],"postres":[{"nombre":"Mousse de frutas del bosque","precio":7.49},{"nombre":"Soufflé de mango y coco","precio":4.99},{"nombre":"Blondie con sorbete de vainilla","precio":8.49}]}
	*/
	

	
	

}


