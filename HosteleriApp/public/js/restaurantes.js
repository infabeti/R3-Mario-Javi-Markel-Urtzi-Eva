$(function() {
	$('.carousel').carousel({

	  interval: false,
	});
	$('.carousel').carousel('pause');

	$('.mapa').click(desplegar_mapa);
	
	function desplegar_mapa() {
		var coordenadas = $(this).attr('coordenadas');
		var latylong = coordenadas.split(', ');
		var cont = 0;

		latylong.forEach(function(x) {
			latylong[cont] = parseFloat(x.replace(',', '.'));
			cont++;
		});
		var lat = latylong[0];
		var longi = latylong[1];

		console.log(latylong);
		initMap(document.getElementById('map-box'),lat,longi);
		var nombre_restaurante = $(this).closest('div.descripcion').find('h3').html();
		$('#map-box').dialog({
			title: 'Localización: '+nombre_restaurante,
			width: 500,
			height: 400
		});
	}
});
