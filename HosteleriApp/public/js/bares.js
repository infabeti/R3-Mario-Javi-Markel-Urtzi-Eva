window.onload = function() {
	initMap(document.getElementById("mapa-bar1"),43.28204226867892, -2.9633951729221835);
	initMap(document.getElementById("mapa-bar1-dialog"),43.28204226867892, -2.9633951729221835);

	initMap(document.getElementById("mapa-bar2"),43.28204226867892, -2.9633951729221835);

	initMap(document.getElementById("mapa-bar3"),43.28204226867892, -2.9633951729221835);

	initMap(document.getElementById("mapa-bar4"),43.28204226867892, -2.9633951729221835);
}
$(function() {
		$('div.mapa-dialog').dialog({
			width: 800,
			height: 500,
			autoOpen: false
		});

	$('.ampliar-mapa').click(function() {
		$('div.mapa-dialog').dialog('open');
	});
});
