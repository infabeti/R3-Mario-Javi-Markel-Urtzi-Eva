$(function() {
	// Para movimiento automático de las imágenes en el carrousel
	$('.carousel').carousel({

	  interval: false,
	});

	// Que no se mueva al iniciar
	$('.carousel').carousel('pause');

	$('.mapa').click(desplegar_mapa);
	
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
