function MapsListo() {
	initMap(document.getElementById("map1"),43.28204226867892, -2.9633951729221835);
	initMap(document.getElementById("map2"),43.27673088861441, -2.957610908458241);
	initMap(document.getElementById("map3"),43.28153704029055, -2.9630619653246835);
	initMap(document.getElementById("map4"),43.27482776711705, -2.9741796688535924);
	distanciaCliente($("#caf1"),43.28204226867892, -2.9633951729221835)
	distanciaCliente($("#caf2"),43.27673088861441, -2.957610908458241)
	distanciaCliente($("#caf3"),43.28153704029055, -2.9630619653246835)
	distanciaCliente($("#caf4"),43.27482776711705, -2.9741796688535924)
}