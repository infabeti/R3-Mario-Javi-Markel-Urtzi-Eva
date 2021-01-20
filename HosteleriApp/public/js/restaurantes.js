$(function() {
	$('.carousel').carousel({

	  interval: false,
	});
	$('.carousel').carousel('pause');

	$('.mapa').click(desplegar_mapa);
	
	function desplegar_mapa() {
		  initMap(document.getElementById('map-box'),43.263012,-2.934985);
		//$('.map-p').dialog();
		//$('#map-box').css('height', '260px');
		$('#map-box').dialog({title: 'prueba'});
		$('#map-box').css({
			'width': '500px', 
			'height' : '400px',
			'position' : 'absolute',
			'margin' : 'auto'
		});
	}
});
